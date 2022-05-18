const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is Required"],
        minLength:[3, "Name has to be at least 3 characters"]
    }
}, {timestamps:true})

module.exports.Author = mongoose.model("Author", AuthorSchema)