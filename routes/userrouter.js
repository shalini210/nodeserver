const express=require("express")
const router = express.Router();
const userController = require("../controllers/userController")

router.post("/login",(req,res)=> {console.log(req.body), userController.all(req,res)})
router.post("/",(req,res)=>userController.Insertuser(req,res))

module.exports =router