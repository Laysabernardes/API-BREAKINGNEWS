//Models é oque realmente faz se conectar com o BD
import mongoose from 'mongoose'; 
    // Importa o módulo "mongoose", que é usado para definir esquemas (schemas) e interagir com o MongoDB.
import bcrypt from "bcryptjs"; 
    // Importa o módulo "bcryptjs" para criptografar senhas.

const UserSchema = new mongoose.Schema({
    // Define o esquema (schema), ou seja a estrutura dos documentos de usuário, para um usuário com os seguintes campos.
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true , // Garante que cada endereço de e-mail seja único.
        lowercase:true, // Armazena o e-mail em letras minúsculas.
    },
    password: {
        type: String,
        required: true,
        select:false, // Evita que a senha seja selecionada por padrão em consultas.
    },
    avatar: {
        type: String,
        required: true,
    },
    background:{
        type: String,
        required: true,
    }
})

// Middleware "pre" do Mongoose que é executado antes de salvar um documento no banco de dados.
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    // Este trecho de código criptografa a senha do usuário usando o bcrypt antes de salvar no banco de dados.
    //O número 10 representa a quantidade de recursos computacionais que o sistema usa para tornar a senha segura, tornando a criptografia mais forte, mas potencialmente mais lenta.
    next();
    //permite que fluxo continue.
});

const User = mongoose.model("User", UserSchema);
    // Define o modelo "User" baseado no esquema "UserSchema".
    //A linha cria uma "caixa" chamada User que define como os dados dos usuários são armazenados e recuperados no banco de dados.


export default User;
    // Exporta o modelo "User" para que ele possa ser usado em outras partes do aplicativo.
