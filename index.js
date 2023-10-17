/*const express = require('express');
const connectDatabase = require("./src/database/db");
const userRoute = require("./src/routes/user.route");
ESTA É UMA VERSÃO ANTIGA DO JS, FAZ A MESMA COISA QUE ESTA ABAIXO E ES MODULE
*/

import express from "express";
import connectDatabase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";

const app = express()
const port = 3000;

connectDatabase();

app.use(express.json()); // Comando para permitir que a aplicação receba JSON
app.use("/user", userRoute);

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));
