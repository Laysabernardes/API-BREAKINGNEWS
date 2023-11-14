import bcrypt from 'bcryptjs';//a senha é criptografada
import {loginService, generateToken} from "../services/auth.service.js";

const login = async (req, res) => {
    const {email,password} = req.body;

    try{
        const user = await loginService(email);//Pesquisar o usuario

        if(!user){
            return res.status(404).send({message:"User or Password not found"});
        }
        const passwordIsValid = bcrypt.compareSync(password,user.password);//Comparar se as senhas criptografadas são iguais.A do login e a do BD
       
        if(!passwordIsValid){
            return res.status(404).send({message:"User or Password not found"});
        }

        const token = generateToken(user.id);
        res.send({token});

    }catch(err){
        res.status(500).send(err.message);
    };
};

export {login};//Exportando um obejto desconstruido, só a função.