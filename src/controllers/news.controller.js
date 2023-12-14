import { createService, findAllService } from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const {title, text, banner} = req.body;

        if(!title || !text || !banner){
            res.status(400).send({ message: "Adicione todos os elementos!" }); 
        }

        await createService({
            title,
            text,
            banner,
            id: "objectidfake1",
        });

        res.send(201);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }

}
const findAll = (req, res) => {
    const news = [];
    res.send(news)
}

export default { create, findAll };