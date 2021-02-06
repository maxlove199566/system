const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchma = new mongoose.Schema({
    fullname:{
        type:String,
    },
    usertype:{
        type:String,
    },
    username:{
        type:String,
    },
    missions:{
        type:[String],
        default:[],
    },
    meeting:{
        type:Boolean,
        default:true
    },
});

userSchma.plugin(passportLocalMongoose);
const User = mongoose.model("User",userSchma);
module.exports = User;
