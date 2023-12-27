const express = require("express")
// const userRouter = require("../routes/userroute")
// const userRouter = require("./routes/userrouter")
const userRouter = require("./routes/userrouter")
const blogRouter = require("./routes/blogrouter")
const cors = require("cors")
const app = express(); 
app.use(cors());
const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(bodyParser.json())

app.use("/user",userRouter)
app.use("/blog",blogRouter)
app.get("/",(req,res)=>
{
    
    res.send("user /user for user ")
})

app.listen(8080,console.log("server running on port 8080"))
