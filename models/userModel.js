

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNo : {
        type : Number,
        required : true
    }
})

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;