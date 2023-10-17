import express from "express";
//comando que permite criar rotas 
//É como criar um objeto, e passar para o route todos os comando do app.(express)
import userController from "../controllers/use.controller.js";
import{validId, validUser} from "../middlewares/global.middlewares.js";

const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id",validId , validUser , userController.findById);
router.patch("/:id",validId , validUser, userController.update);

export default router;