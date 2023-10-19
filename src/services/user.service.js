import User from "../models/User.js";
  // Importa o modelo "User" definido no arquivo "../models/User.js".
  //.create, .find, .findById , .findOneAndUpdate são metodos do mongoose. 

const createService = (body) => User.create(body);// Função para criar um novo usuário no banco de dados

const findAllService = () => User.find();
  // Função para encontrar todos os usuários no banco de dados.

const findByIdService = (id) => User.findById(id);
  // Função para encontrar um usuário pelo seu ID no banco de dados.


const updateService = (id, name, username, email, password, avatar, background) => {
  // Função para atualizar as informações de um usuário no banco de dados com base no ID.
  // Usa o método "findOneAndUpdate" do Mongoose para encontrar e atualizar um documento com base no ID (_id) especificado.
    return User.findOneAndUpdate(
      { _id: id }, // Critério de consulta para encontrar o usuário pelo ID.
      {           // Valores a serem atualizados.
        name,
        username,
        email,
        password,
        avatar,
        background
      }
    );
  };

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
};