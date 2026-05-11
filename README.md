# Task API

Uma API RESTful para gerenciamento de tarefas construída com Node.js, Express e MongoDB.

## 🚀 Características

- ✅ CRUD completo de tarefas
- ✅ Validação de dados
- ✅ Tratamento de erros robusto
- ✅ Logger de requisições
- ✅ CORS habilitado
- ✅ Suporte a async/await
- ✅ Autenticação com JWT pronta para expansão

## 📋 Pré-requisitos

- Node.js v18+
- MongoDB local ou remoto

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <seu-repo>
cd task-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env conforme necessário
```

4. Certifique-se de que MongoDB está rodando:
```bash
# No Windows com MongoDB instalado
mongod
```

## 🏃 Como Executar

### Modo Desenvolvimento (com hot-reload):
```bash
npm run dev
```

### Modo Produção:
```bash
node src/server.js
```

O servidor estará disponível em `http://localhost:3000`

## 📚 Documentação da API

### Base URL
```
http://localhost:3000/task
```

### Endpoints

#### 1. Listar todas as tarefas
```
GET /task
```

**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Estudar Node.js",
      "description": "Aprender conceitos avançados",
      "completed": false
    }
  ]
}
```

#### 2. Criar nova tarefa
```
POST /task
```

**Request body:**
```json
{
  "title": "Estudar Node.js",
  "description": "Aprender conceitos avançados"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Estudar Node.js",
    "description": "Aprender conceitos avançados",
    "completed": false
  }
}
```

**Validação:**
- `title` e `description` são obrigatórios
- Retorna erro 400 se faltarem campos

#### 3. Obter tarefa por ID
```
GET /task/:id
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Estudar Node.js",
    "description": "Aprender conceitos avançados",
    "completed": false
  }
}
```

**Possíveis erros:**
- 400: ID inválido
- 404: Tarefa não encontrada

#### 4. Atualizar tarefa
```
PUT /task/:id
```

**Request body:**
```json
{
  "title": "Novo título",
  "description": "Nova descrição",
  "completed": true
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Novo título",
    "description": "Nova descrição",
    "completed": true
  }
}
```

#### 5. Deletar tarefa
```
DELETE /task/:id
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Estudar Node.js",
    "description": "Aprender conceitos avançados",
    "completed": false
  }
}
```

## 📦 Dependências

- **express** - Framework web
- **mongoose** - ODM para MongoDB
- **dotenv** - Gerenciamento de variáveis de ambiente
- **cors** - Habilitação de CORS
- **bcryptjs** - Hash de senhas (preparado para autenticação)
- **jsonwebtoken** - JWT para autenticação

## 🏗️ Estrutura do Projeto

```
task-api/
├── src/
│   ├── config/
│   │   └── db.js           # Conexão com MongoDB
│   ├── controllers/
│   │   └── task.js         # Lógica dos endpoints
│   ├── middlewares/
│   │   └── logger.js       # Logger de requisições
│   ├── models/
│   │   └── task.js         # Schema do MongoDB
│   ├── routes/
│   │   └── task.js         # Definição das rotas
│   └── server.js           # Arquivo principal
├── .env                    # Variáveis de ambiente (não commitado)
├── .env.example            # Exemplo de variáveis
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências do projeto
└── README.md              # Este arquivo
```

## 🧪 Testando a API

### Com PowerShell (Windows):

**Criar tarefa:**
```powershell
$body = @{title="Tarefa"; description="Descrição"} | ConvertTo-Json
Invoke-WebRequest -Uri "http://localhost:3000/task" -Method POST -Headers @{"Content-Type"="application/json"} -Body $body -UseBasicParsing
```

**Listar tarefas:**
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/task" -Method GET -UseBasicParsing
```

### Com cURL (Linux/macOS):

**Criar tarefa:**
```bash
curl -X POST http://localhost:3000/task \
  -H "Content-Type: application/json" \
  -d '{"title":"Tarefa","description":"Descrição"}'
```

**Listar tarefas:**
```bash
curl http://localhost:3000/task
```

## 🔐 Recursos Futuros

- [ ] Autenticação com JWT
- [ ] Sistema de usuários
- [ ] Filtros e paginação
- [ ] Testes automatizados (Jest)
- [ ] Documentação com Swagger
- [ ] Deploy em produção

## 📝 Licença

ISC

## 👨‍💻 Autor

Seu Nome

---

**Última atualização:** Maio 2026
