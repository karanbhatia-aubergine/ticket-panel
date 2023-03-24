const mongoose = require('mongoose')

const json_Schema = new mongoose.Schema({
    HR: {
        type: [String],
        required: true
      },
    Hardware: {
        type: [String],
        required: true
      },
    Machine_Type: {
        type: [String],
        required: true
      },
    Type: {
        type: [String],
        required: true
      }
    });


const json_Data = mongoose.model('data',json_Schema)
module.exports = json_Data