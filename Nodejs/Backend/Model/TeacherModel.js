const mongoose=require('mongoose');


const teacherSchema=new mongoose.Schema({

    Name:String,
    email:String,
    password:String,
    phone_no:Number

})

const Teacher=mongoose.model("teachers",teacherSchema);

module.exports=Teacher;