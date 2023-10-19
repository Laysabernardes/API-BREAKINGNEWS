import User from "../models/User.js";
    // Importa o modelo "User" definido no arquivo "../models/User.js".

    // A função "loginService" verifica se há um usuário no banco de dados com um determinado endereço de e-mail.
    // Ela recebe o e-mail como parâmetro.
const loginService = (email) => {
    // Usa o método "findOne" do Mongoose para buscar um documento na coleção "User" onde o campo "email" seja igual ao e-mail passado como parâmetro.
    return User.findOne({ email: email })
        
    .select("+password");
    // O método ".select("+password") é usado para incluir o campo "password" na resposta.
};

export { loginService };
    // Exporta a função "loginService" para que ela possa ser usada em outros módulos.
