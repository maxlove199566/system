const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    author:{
        type:String
    },
    author_id:{
        type:String
    },
    student:{
        type:[String],
        default:[],
    },
});

const Mission = mongoose.model("mission",missionSchema);
module.exports = Mission;