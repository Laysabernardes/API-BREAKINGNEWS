//O service é o resposavél pela comunicação com BD
import User from "../models/User.js";

//Fazendo uma verificação no BD de um email QUE É UNICO nesse BD!
//({email: email}) 1º é oque busca 2ºoque estou mandando para comparar
//.select("+password")) é usado para SOMENTE NESSE CASO retornar a senha tb.
const loginService = (email) => User.findOne({ email: email}).select("+password");

export { loginService };