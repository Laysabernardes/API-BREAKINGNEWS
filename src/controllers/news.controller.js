import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if(!title || !text || !banner){
            res.status(400).send({ message: "Adicione todos os elementos!" }); 
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        res.status(201).send();
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}
const findAll = async (req, res) => {
    const news = await findAllService();

    if (news.length === 0) {
        return res.status(400).send({ message: "Não há postagens registradas." });
    }
    res.send(news);
}

export { create, findAll };