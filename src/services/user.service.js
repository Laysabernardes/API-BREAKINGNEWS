import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id,name,username,email,password,avatar,background) => User.findOneAndUpdate({_id: id},{name,username,email,password,avatar,background});
//findOneAndUpdate vai procurar por um campo e atualizar
//_id é o id do mongodb e id é o daqui

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};