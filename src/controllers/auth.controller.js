import bcrypt from 'bcryptjs';
// Importa a biblioteca bcrypt para lidar com a criptografia de senhas.
import {loginService} from "../services/auth.service.js";
// Importa o serviço de autenticação "loginService".

// Função para processar o login do usuário.
const login = async (req, res) => {
    const {email,password} = req.body;
    // Extrai o email e senha da solicitação.

    try{
        const user = await loginService(email);
        // Pesquisa um usuário com base no email fornecido.

        if(!user){
            return res.status(404).send({message:"Usuário ou senha não encontrados."});
        }

        // Compara a senha fornecida no login com a senha armazenada no banco de dados (após criptografia).
        const passwordIsValid = bcrypt.compareSync(password,user.password);
       
        if(!passwordIsValid){
            // Se as senhas não coincidirem, retorna uma resposta de erro com status 404.
            return res.status(404).send({message:"Usuário ou senha não encontrados."});
        }
        // Se o login for bem-sucedido, envia uma resposta indicando que o login está ok.
        res.send("Login bem-sucedido");

    }catch(err){
        res.status(500).send(err.message);
    };
};

export {login};//Exportando um obejto desconstruido, só a função.