import { Router } from "express";
    // Importa o módulo "Router" do Express, que permite definir rotas.

const router = Router();
    // Cria uma instância do Router para definir as rotas.

import { login } from "../controllers/auth.controller.js";
    // Importa a função "login" do arquivo de controlador "auth.controller.js".

router.post("/", login);
    // Define uma rota POST no endpoint raiz ("/") que será acessada quando uma solicitação POST for feita para o servidor.
    // Quando essa rota é acessada, a função "login" do controlador será chamada para processar a solicitação.

export default router;
    // Exporta o router, que contém a rota definida, para que ele possa ser usado em outros lugares do aplicativo.
