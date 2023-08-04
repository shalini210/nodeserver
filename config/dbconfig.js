const mongoose = require("mongoose")
let connectionString = "mongodb://localhost:27017/taskapi"
var connection = mongoose.connect(connectionString,{useNewUrlParser:true});
module.exports= connection;

