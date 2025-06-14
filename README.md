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
