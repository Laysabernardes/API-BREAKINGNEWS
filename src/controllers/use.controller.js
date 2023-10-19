// Importa o serviço "userService" para lidar com operações relacionadas a usuários.
import userService from "../services/user.service.js";
    
// Função para criar um novo usuário.
//async para dizer que é uma função assincrona
const create = async (req, res) => {
    try {// Extrai os campos do usuário (name, username, email, password, avatar, background) da solicitação.
        const { name, username, email, password, avatar, background } = req.body;

        // Verifica se todos os campos obrigatórios foram fornecidos na solicitação.
        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "Preencha todos os campos para o registro." }); //status(400) e para envioar o erro de codigo https, quando o cliente não manda todos os campos
        }

        // Cria um novo usuário usando o serviço "userService".
        //await é usado junto com async. Indica que o pc deve aguarda a resposta da função assincrona
        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao criar o usuário." });
        }

        // Envia uma resposta de sucesso com os detalhes do usuário criado.
        res.status(201).send({
            message: "Usuário criado com sucesso",
            user: {
                //So tem essa construção porque a chave e o valor são igual posso colocar direto. Caso contrario seria algo tipo name: name,
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

// Função para buscar todos os usuários.
const findAll = async (req, res) => {
    try {
        // Busca todos os usuários usando o serviço "userService".
        const users = await userService.findAllService();

        // verificar se o array está vazio, ou seja, não contém nenhum elemento.
        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuários registrados." });
        }
        // Envia a lista de usuários como resposta.
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

// Função para buscar um usuário por ID.
const findById = async (req, res) => {

    //Essa função usa os middleawares antes.

    try {
        // Recupera o usuário da solicitação.
        const user = req.user;

        // Envia o usuário como resposta.
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

// Função para atualizar informações de um usuário.
const update = async (req, res) => {
    try {// Extrai os campos a serem atualizados (name, username, email, password, avatar, background) da solicitação.
        const { name, username, email, password, avatar, background } = req.body;

        // Verifica se pelo menos um campo deve ser atualizado.
        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message: "Envie pelo menos um campo para a atualização." });
        };

        // Obtém o ID do usuário e o usuário da solicitação.
        const { id, user } = req;

        //essa função utiliza middlewares antes
        
        // Usa o serviço "userService" para atualizar as informações do usuário.
        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );

        // Envia uma resposta de sucesso após a atualização.
        res.send({ message: "Usuario foi atualizado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

// Exporta as funções para serem usadas em outras partes do aplicativo.
export default { create, findAll, findById, update };