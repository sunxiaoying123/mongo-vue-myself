const  Mongoose =require("mongoose");

const heroSchema = Mongoose.Schema({
    name: String,
    age: String,
    sex: String,
    address: String,
    dowhat: String,
    imgArr: [],
    favourite: String,
    explain: String,
}, {
    collection: 'myhero'
})
const Hero = module.exports = Mongoose.model('hero',heroSchema)