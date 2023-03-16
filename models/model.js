const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    role:{
        required:true,
        type:String
    },
    access:{
        required:true,
        type:String
    }
});


const Data = mongoose.model('users',dataSchema)
module.exports = Data