const mongoose = require("mongoose")

const TeamSchema = mongoose.Schema({
    name:{
        type:String
    },
    position:{
        type:String
    },
    status:{
        type:String
    }
}, {timestamps:true})

module.exports.Product = mongoose.model("Team", TeamSchema)