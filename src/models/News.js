import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    banner: {
        type: String,
        require: true,
    },
    createdAT: {
        type: Date,
        default: Date.now(), //Default é para pegar o valor padrão, e date.now pega a hora atual
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // a referencia aqui tem que ser igual a referencia do schema que to querendo pegar, no caso o user
        require: true, 
    },
    likes: {
        type: Array,
        require: true,
    }, 
    comments: {
        type: Array,
        require: true,
    }
});

const News = mongoose.model ("News", NewsSchema);

export default News;