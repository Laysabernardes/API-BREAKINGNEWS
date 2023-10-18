import User from "../models/User.js";

//.create é um metodo do mongoose para criar um novo documento no mongoDB
const createService = (body) => User.create(body);

//.find  é um método de consulta do Mongoose para consultar as coleções
const findAllService = () => User.find();

//findById é um método de consulta do Mongoose que é utilizado para recuperar um único documento com base no ID.
const findByIdService = (id) => User.findById(id);

//findOneAndUpdate é um método do Mongoose que permite procurar um documento com base em critérios de consulta 
const updateService = (id,name,username,email,password,avatar,background) => User.findOneAndUpdate({_id: id},{name,username,email,password,avatar,background});
//findOneAndUpdate vai procurar por um campo e atualizar
//_id é o id do mongodb e id é o daqui

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};