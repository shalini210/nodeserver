const express=require("express")
const router = express.Router();
const blogController = require("../controllers/blogcontroller")

// router.post("/login",(req,res)=> {console.log(req.body), userController.all(req,res)})
router.post("/addblog",(req,res)=>blogController.Insertblog(req,res))
router.get("/",(req,res)=> {console.log(req.body), blogController.all(req,res)})
router.delete("/:id",(req,res)=>{console.log(req.body), blogController.delete(req,res)})
router.put("/",(req,res)=>{console.log(req.body), blogController.update(req,res)})
module.exports =router