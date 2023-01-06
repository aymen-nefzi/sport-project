// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})
// create model ( PascalCase)
const User=mongoose.model("user",userSchema)
module.exports=User;