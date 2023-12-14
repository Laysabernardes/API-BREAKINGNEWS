import News from '../models/News.js'

const createService = (body) => News.crate(body);

const findAllService = () => News.find();

export default{
    createService,
    findAllService
}