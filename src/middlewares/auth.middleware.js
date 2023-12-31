import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../services/user.service.js"

dotenv.config();

export const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.send(401);
        }

        const parts = authorization.split(" ");

        if (parts.length !== 2) {
            return res.status(401).send();
        }

        const [schema, token] = parts;

        if (schema !== "Bearer") {
            return res.status(401).send();
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error){
                return res.status(401).send({mensage:"Token invalid"});
            }
            console.log(decoded);

            const user = await userService.findByIdService(decoded.id);

            if(!user || !user.id){
                return res.status(401).send({mensage:"Token invalid"});
            }
    
            req.userId = user.id;

            return next();
        });

    }catch (err){
        res.status(500).send(err.mensage);
    }
    
};