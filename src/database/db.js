import mongoose from "mongoose";

const connetcDatabase = () => {
    console.log("Wait connecting to the databse");

    //process.env.MONGODB_URI é uma variavel global .env
    mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }

    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

//module.exports = connetcDatabase;
export default connetcDatabase;