import News from '../models/News.js';

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");
//populate -> mongoose 

const  countNews =  () => News.countDocuments();
//countDocuments -> mongoose 

export {
    createService,
    findAllService,
    countNews
};