const mongoose=require('mongoose');


const StudentsSchema=new mongoose.Schema({

    RollNo: { type: Number, unique: true },
    Name:String,
    DOB:Date,
    Score:Number 
})
const Students=mongoose.model('students',StudentsSchema);

module.exports=Students;