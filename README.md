# 🚀 Cadastro de Usuários - Backend

API REST desenvolvida com Node.js para gerenciamento de usuários, permitindo cadastro, listagem, atualização e exclusão de dados.

---

## 🧠 Sobre o Projeto

Este projeto foi criado com o objetivo de praticar desenvolvimento backend utilizando boas práticas como:

* Estrutura de rotas REST
* Integração com banco de dados
* Tratamento de erros
* Organização de código

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* Prisma ORM
* MongoDB

---

## ⚙️ Funcionalidades

✔️ Criar usuário
✔️ Listar usuários
✔️ Atualizar usuário
✔️ Deletar usuário
✔️ Validação de dados
✔️ Tratamento de erros (ex: usuário já cadastrado)

---

## 📡 Endpoints da API

### 🔹 Criar usuário

POST /usuarios

### 🔹 Listar usuários

GET /usuarios

### 🔹 Atualizar usuário

PUT /usuarios/:id

### 🔹 Deletar usuário

DELETE /usuarios/:id

---

## 📦 Como rodar o projeto

```bash
# Instalar dependências
npm install

# Gerar cliente do Prisma
npx prisma generate

# Rodar servidor
node server.js
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="sua_url_do_banco"
```

---

## 📁 Estrutura do Projeto

```
backend/
 ├── prisma/
 ├── server.js
 ├── package.json
 └── .env
```

---

## 💡 Melhorias Futuras

* Autenticação com JWT 🔐
* Criptografia de senha (bcrypt)
* Validação com Zod
* Deploy em produção

---

