//Models é oque realmente faz se conectar com o BD
import mongoose from 'mongoose'; //Biblioteca Node.js
import bcrypt from "bcryptjs"; //para criptografar as senhas

//Schema é uma metodo do mongoose
//nesse comando esta verificando cada campo so que no campo
// 2º vericação a 1º foi no use.cotroller.js
const UserSchema = new mongoose.Schema({
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
        unique: true , //para cada email ser unico
        lowercase:true,
    },
    password: {
        type: String,
        required: true,
        select:false,
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

//Comando para cripstografar a password
//Esse 10 indica que var ter 10 saltos de criptografia
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);

export default User;
