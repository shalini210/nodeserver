const connection = require("../config/dbconfig");
const userModel = require("../models/usermodel")

exports.all=async (req,res)=>
{    
    console.log(req.body)
        const users = await userModel.find({email:req.body.email,pwd:req.body.pwd}).limit(1);
        res.send({data:users})    
}
exports.Insertuser =async (req,res)=>
{
    console.log(req.body)
    const user = new userModel(
        {
            username:req.body.username,
            email:req.body.email,
            pwd:req.body.pwd,
        }
    )
    await user.save()
    .then(data=>{
        res.send("user Registered")
        
    })
    .catch(err=>
    {
        res.send(err);
    })
}
