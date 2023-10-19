import mongoose from "mongoose";

const connetcDatabase = () => {
    console.log("Aguarde enquanto a conexão com o banco de dados é estabelecida");

    mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conexão com o MongoDB Atlas estabelecida")).catch((error) => console.log(error));
};

export default connetcDatabase;