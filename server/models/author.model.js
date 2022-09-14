//import mongoose to build

const mongoose = require("mongoose");

//the schema - rules that entries in DB must follow

const AuthorsSchema = new mongoose.Schema({
    name: {type:String,required:[true,"Name required"],minlength:[2,"Name must be atleast 2 chars"]},
    
}, {timestamps:true})

//the model - this is what we use to make the actual query to the DB!

const Author = mongoose.model("Author",AuthorsSchema);

//export the model
module.exports=Author;