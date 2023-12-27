var mongoose = require("mongoose");
var schema = new mongoose.Schema(
    {
        title:String,
        category:String,
        des:String,
    }
);
var blogs = new mongoose.model("blogs",schema);
module.exports=blogs;