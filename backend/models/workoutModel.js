const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type : String,
        required:true
    },
    desc: {
        type : String,
        required:true
    },
    link: {
        type : String,
    },
    user_id : {
        type: String,
        required: true
    }
    
}, {timestamps:true })

module.exports= mongoose.model('Workout', workoutSchema )
