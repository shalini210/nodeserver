const connection = require("../config/dbconfig");
const userModel = require("../models/usermodel")
const blogModel = require("../models/blogmodel")
exports.all=async (req,res)=>
{    
    console.log(req.body)
        const users = await blogModel.find();
        res.send(users)    
}
exports.Insertblog =async (req,res)=>
{
    console.log(req.body)
    const blog = new blogModel(
        {
            title:req.body.title,
            des:req.body.des,
            category:req.body.category,
        }
    )
    await blog.save()
    .then(data=>{
        res.send("blog added")
        
    })
    .catch(err=>
    {
        res.send(err);
    })
}

exports.delete=async (req,res)=>{
   
        // await blogModel.findByIdAndDelete(req.params.id).then(
            console.log(req.params)
            await blogModel.findByIdAndDelete(req.params.id).then(
            data=>
            {
                if(data)
                {
                    console.log(data)
                    res.send("deleted");
                }
                else
                {
                    console.log(data)
                    res.send("bloh not found")
                }    
            })
            .catch(err=>res.send(err))
    }
    
    exports.update=async (req,res)=>{
    // app.put("/:id",async function(req,res)
    
        // await teacherModel.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false}).then(
            await blogModel.updateOne({_id:req.body.id},{$set:{title:req.body.title,
                category:req.body.category,des:req.body.des}}).then(
            data=>
            {
                if(data)
                {
                    res.send("updated")
                }
                else
                {
                    res.send("not found/ update")
                }
            })
            .catch(err=>
                res.send("error occured "+ err))
    }
