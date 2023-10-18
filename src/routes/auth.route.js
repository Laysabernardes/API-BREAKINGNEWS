import {Router} from "express";//Descontruindo um onjeto para importar por isso usa as chaves
const router = Router();

import{login} from "../controllers/auth.controller.js";

router.post("/",login);

export default router;