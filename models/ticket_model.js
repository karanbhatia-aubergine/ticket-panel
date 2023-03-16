const mongoose = require('mongoose')
const ticket_schema = new mongoose.Schema({
        ticket :{
            required : true,
            type : String
        },
        date:{
            required:true,
            type : Date
        },
        userid:{
            required:true,
            type:String
        },
        username:{
            required:true,
            type:String
        },
        name:{
            required:true,
            type:String
        },
        department:{
            required:true,
            type:String
        },
        Subject:{
            required:true,
            type:String
        },
        category:{
            required:true,
            type:String
        },
        type:{
            required:true,
            type:String
        },
        Priority:{
            required:true,
            type:String
        },
        description:{
            required:false,
            type:String
        },
        attachment :{
            required:false,
            data : Buffer,
            type:String
        },
        status :{
            required:false,
            type:String
        }
});
const Ticket_Data = mongoose.model('tickets',ticket_schema)
module.exports = Ticket_Data