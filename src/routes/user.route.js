import {Router} from "express";
    // Importa o módulo "Router" do Express, que permite definir rotas.

import userController from "../controllers/use.controller.js";
    // Importa o controlador (controller) para manipular as operações relacionadas a usuários. O controlador é responsável por definir a lógica de manipulação de cada rota.

import{validId, validUser} from "../middlewares/global.middlewares.js";
    // Importa funções de middleware que serão executadas antes de lidar com as rotas

const router = Router();
    // Cria uma instância do Router para definir as rotas.

router.post("/", userController.create);
    // Define a rota POST para criar um novo usuário. Quando a rota é acessada, a função "create" do controlador é chamada.
router.get("/", userController.findAll);
    // Define a rota GET para listar todos os usuários.
router.get("/:id",validId , validUser , userController.findById);
    // Define a rota GET com um parâmetro dinâmico ":id" para buscar um usuário por ID. 
    // Os middlewares "validId" e "validUser" são executados antes da função "findById" do controlador.
router.patch("/:id",validId , validUser, userController.update);
    // Define a rota PATCH com um parâmetro dinâmico ":id" para atualizar um usuário por ID. 
    // Os middlewares "validId" e "validUser" são executados antes da função "update" do controlador.

export default router;
    // Exporta o router, que contém todas as rotas definidas, para que ele possa ser usado em outros lugares.