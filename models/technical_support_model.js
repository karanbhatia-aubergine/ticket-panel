const mongoose = require('mongoose')

const technical_support_schema = new mongoose.Schema({
    supporter_name:{
        required:true,
        type:String
    },
    technician_password:{
        required:true,
        type:String
    },
    contact_No:{
        required:true,
        type:Number
    },
    department:{
        required:true,
        type:String
    },
    photo:{
        required:false,
        data : Buffer,
        type:String
    },
    email:{
        required:true,
        type:String,
    },
    operation_team:{
        required:true,
        type:String
    }
})
const Technical_Data = mongoose.model('techanician',technical_support_schema)
module.exports = Technical_Data