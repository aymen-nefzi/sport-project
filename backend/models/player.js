// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const playerSchema=mongoose.Schema({
    playerName:String,
    position:String,
    number:Number,
    age:Number,
    img:String,
})
// create model ( PascalCase)
const player=mongoose.model("player",playerSchema)
module.exports=player;