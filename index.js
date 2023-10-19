import express from "express";
    // Importa o express, que é uma biblioteca para criar aplicativos web em Node.js.
import connectDatabase from "./src/database/db.js";
    // Importa o connectDatabase de db.js para conectar ao MongoDB.
import userRoute from "./src/routes/user.route.js";
    // Importa o userRoute do arquivo user.route.js para definir rotas do usuários.
import authRoute from "./src/routes/auth.route.js";
    // Importa o authRoute do arquivo auth.route.js para definir rotas de autenticação.
import dotenv from "dotenv";
    // Importa o'dotenv' para carregar variáveis de ambiente a partir de um arquivo chamado '.env'.

dotenv.config();
    // Configura as variáveis de ambiente a partir do arquivo '.env'.

const app = express();
    // Cria uma instância do aplicativo Express.

const port = process.env.PORT || 3000;
    // Define uma porta para o servidor, usando a variável de ambiente 'PORT' se estiver definida, caso contrário, usa a porta 3000.

connectDatabase();
    // Conecta ao banco de dados.

app.use(express.json());
    // Define que a aplicação Express irá lidar com solicitações e respostas em formato JSON.
app.use("/user", userRoute);
    // Associa as rotas definidas no arquivo 'user.route.js' à aplicação Express, prefixando-as com "/user".
app.use("/auth", authRoute);
    // Associa as rotas definidas no arquivo 'auth.route.js' à aplicação Express, prefixando-as com "/auth".
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    // Inicia o servidor Express e escuta na porta definida, exibindo uma mensagem quando o servidor está rodando.
