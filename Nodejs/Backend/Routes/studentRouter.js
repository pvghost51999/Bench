const express=require('express');

const studentRouter=express.Router();

studentRouter.get("/find",(req,res)=>{

    res.send("login credentials");

})


module.exports=studentRouter;

