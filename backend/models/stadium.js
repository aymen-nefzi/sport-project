// import mongoose module
const mongoose = require("mongoose");
// create match schema (attributes)
const stadiumSchema=mongoose.Schema({
    stadiumName:String,
    capacity:Number,
    foundation:Number,
    country:String,
})
// create model ( PascalCase)
const Stadium=mongoose.model("stadium",stadiumSchema)
module.exports=Stadium;