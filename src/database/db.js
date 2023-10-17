import mongoose from "mongoose";

const connetcDatabase = () => {
    console.log("Wait connecting to the databse");

    mongoose.connect(
        "mongodb+srv://laysabernardes:teste123@cluster0.dcvgmve.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true }

    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

//module.exports = connetcDatabase;
export default connetcDatabase;