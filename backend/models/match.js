// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const matchSchema=mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String,
    stadium:String,
})
// create model ( PascalCase)
const match=mongoose.model("match",matchSchema)
module.exports=match;