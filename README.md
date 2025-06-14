# 🛵 MotoFácil

**Sistema de entregas rápidas por motoboys em Juiz de Fora - MG**

---

## 📌 Visão Geral

MotoFácil é uma plataforma web para cadastro e gerenciamento de entregas expressas por motoboys.  
Atualmente focado no fluxo de criação de entregas e cálculo automático de tarifas com base em distância, tempo e peso.

---

## ✅ Funcionalidades Atuais

- 📦 Cadastro de novas entregas
- 📃 Listagem de entregas registradas
- ⚙️ Configuração de parâmetros de cálculo de frete  
  *(faixas de peso, preço por km, preço por minuto)*

> **Em desenvolvimento:**  
🔐 Autenticação (clientes, motoboys e administradores)  
📲 Painel exclusivo para motoboys  

---

## 🛠️ Tecnologias Utilizadas

| **Camada**   | **Tecnologias**                                   |
|--------------|---------------------------------------------------|
| Backend      | Node.js, Express, Mongoose (MongoDB)             |
| Frontend     | React (Vite), Tailwind CSS, React Router         |
| Integrações  | Axios para chamadas HTTP                         |
| Infraestrutura | Docker + Docker Compose (para MongoDB)         |

---

## ⚙️ Requisitos para Rodar o Projeto

- Node.js **v14 ou superior**
- npm ou yarn
- Docker + Docker Compose (para o banco de dados MongoDB)

---

## 🚀 Como Rodar o Projeto Localmente

### 📌 Subindo o Banco de Dados (MongoDB)

```bash
docker-compose up -d
```

## 📌 Backend (API Node.js)

```bash
cd src/api
npm install
cp .env.example .env
# Edite o arquivo .env com suas configurações locais
npm run dev
# API rodando em: http://localhost:3000
```

### Exemplo de conteúdo do .env:

```bash
MONGO_URI=mongodb://admin:admin@localhost:27017/motofacil?authSource=admin
MONGO_USER=admin
MONGO_PASS=admin
PORT=3000
```

### Popular as tarifas iniciais de entrega:

```bash
node src/api/scripts/seedTariffSettings.js
```

## 📌 Frontend (React + Vite)

```bash
cd ../frontend
npm install
npm run dev
# Frontend rodando em: http://localhost:5173
```

---

## 📈 Fluxo da Entrega

## 📍 Diagrama de Processo
![](docs/diagrama-arquitetura.png)

## 📍 Arquitetura da Aplicação
![](docs/diagrama-processo.png)

## 🎥 Vídeo de Demonstração

Um vídeo mostrando as telas e funcionalidades atuais está disponível no repositório:

📂 docs/Vídeo demonstração - MotoFácil.mkv
