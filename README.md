# API - Pet Shop Scheduling System 🐾

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

A RESTful API for a pet shop scheduling system. Built with Node.js, Express, and Prisma, it allows users to view available services and book appointments.

## ✨ Features

-   **User Authentication & Management:** Full CRUD for user accounts with secure JWT-based login.
-   **Service Management:** Allows administrators to create, update, and delete available pet shop services (e.g., bath, haircut, vet appointment).
-   **Appointment Scheduling:** Users can book an available service for a specific date and time.
-   **Secure & Protected Routes:** JWT authentication ensures that only logged-in users can create or view their appointments.
-   **Data Validation:** Uses Zod to validate all incoming data, ensuring system integrity.
-   **Secure Password Storage:** Passwords are encrypted using `bcryptjs`.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Authentication:** [JSON Web Token (JWT)](https://jwt.io/) & [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
-   **Schema Validation:** [Zod](https://zod.dev/)

## 🚀 Getting Started

To run this project locally, you'll need Node.js, npm, and a running PostgreSQL instance.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/scheduling-petshop-project.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd scheduling-petshop-project
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string and JWT secret.
    ```.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    JWT_SECRET="your-super-secret-key"
    ```
    *Replace the values with your PostgreSQL credentials and a secret key of your choice.*

5.  **Run database migrations:**
    This will create the necessary tables in your database.
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3000`.

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > Uma API RESTful para um sistema de agendamento de pet shop. Construída com Node.js, Express e Prisma, permite que usuários visualizem os serviços disponíveis e marquem horários.

  ### ✨ Funcionalidades

  -   **Autenticação e Gerenciamento de Usuários:** CRUD completo para contas de usuário com login seguro via JWT.
  -   **Gerenciamento de Serviços:** Permite que administradores criem, atualizem e deletem os serviços disponíveis no pet shop (ex: banho, tosa, consulta).
  -   **Agendamento de Horários:** Usuários podem agendar um serviço disponível para uma data e hora específicas.
  -   **Rotas Seguras e Protegidas:** A autenticação JWT garante que apenas usuários logados possam criar ou visualizar seus agendamentos.
  -   **Validação de Dados:** Usa Zod para validar todos os dados de entrada, garantindo a integridade do sistema.
  -   **Armazenamento Seguro de Senhas:** Senhas são criptografadas com `bcryptjs`.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js, npm e uma instância do PostgreSQL ativa.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` na raiz e adicione sua string de conexão do banco e um segredo para o JWT.
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3000`.

</details>
