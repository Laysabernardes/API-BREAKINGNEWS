//Meio de importação: ES module
import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import dotenv from "dotenv";

dotenv.config();//para configurar variavies globais 
 
const app = express()
const port = process.env.PORT || 3000;
//process.env.PORT para indicar a porta utilizada pelo banco

connectDatabase();

app.use(express.json()); // Comando para permitir que a aplicação receba JSON
app.use("/user", userRoute);//Associa as rotas definidas no arquivo "user.route.js" à aplicação Express, prefixando-as com "/user".
app.use("/auth", authRoute);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
