import userService from "../services/user.service.js";

//Função de callback
//async para dizer que é uma função assincrona
const create = async (req, res) => {
    try {//constante que verifica todos os campos
        const { name, username, email, password, avatar, background } = req.body;


        if (!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message: "Submit all fields for registration" }); //status(400) e para envioar o erro de codigo https, quando oc liente não manda todos os campos
        }

        //awiat é usado junto com async
        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error creating User" });
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                //porque a chave e o valor são igual posso colocar direto, ao inves de name: name coloca so 
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

//o primeiro findAll é o do use.controlles e o 2 findAll é o do useService
const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered users" });
        }
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

const findById = async (req, res) => {

    //esse codigo é um padrão do mongoose para testar id se é valido
    /*  if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).send({message:"Invalid ID"});
     } */



    /* if(!user){
         return res.status(400).sens({message: "User not found"});
     }*/

    try {
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
}

const update = async (req, res) => {
    try {
        const { name, username, email, password, avatar, background } = req.body;


        if (!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message: "Submita pelo menos um  campo para fazer o Update" });
        };

        const { id, user } = req;//comando para pegar o id da requisição

        /* if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).send({message:"Invalid ID"});
        }; */

        /*  const user = await userService.findByIdService(id); */
        //para pegar o usuario

        //if para verificar se o user ja existe
        /* if(!user){
            return res.status(400).sens({message: "User not found"});
        }; */

        //esta mandando por parametros
        await userService.updateService(
            id,
            name,
            username,
            email,
            password,
            avatar,
            background
        );
        res.send({ message: "Usuario foi atualizado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: err.mensage })
    }
};

export default { create, findAll, findById, update };