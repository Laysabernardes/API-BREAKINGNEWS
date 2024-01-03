import News from '../models/News.js';

export const createService = (body) => News.create(body);

export const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");
//populate -> mongoose 

export const  countNews =  () => News.countDocuments();
//countDocuments -> mongoose 

export const topNewsService = () => News.findOne().sort({_id: -1}).populate("user");

export const findByIdService = (id) =>News.findById(id).populate("user"); 

export const searchByTtitle = (title) => News.find({
    //para fazer um comando especifico do MONGODB usa o $ 
    
    //esse i em option é para indicar que é não é case-sentive, ou seja vai fazer uma busca independente de estar com letra mausculas ou minuscula. 
    // o regex indica que ele pode mandar o titlwe completo ou partes dele 
    //sort para trazer do banco em ordem decrescente
    // populate para trazer as infromações do user junto com as informações do news
    title:{$regex:`${title || " "}`, $options: "i"},
}).sort({_id: -1}).populate("user");
