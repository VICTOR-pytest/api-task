const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const taskRoutes = require('./routes/task');
const logger = require('./middlewares/logger');

const app = express();

// Middleware global
app.use(logger);
app.use(cors());
app.use(express.json());

// Rotas
app.use('/task', taskRoutes);

// Rota de health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

// Tratamento de rota não encontrada
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({ 
        success: false, 
        message: err.message || 'Internal server error' 
    });
});

// Conectar ao banco de dados e iniciar servidor
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
