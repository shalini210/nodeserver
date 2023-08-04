var mongoose = require("mongoose");
var schema = new mongoose.Schema(
    {
        username:String,
        email:String,
        pwd:String,
    }
);
var users = new mongoose.model("users",schema);
module.exports=users;