const Students = require("../Model/StudentsModel")


const getAllStudents=async ()=>{

    const data=await Students.find({}).sort({'Name':1});

    return data;

}
const getStudentById=async (req)=>{
    
    const rollNo=req.params._id;
    const data=await Students.find({
        RollNo:rollNo
    })

    return data
}

const editStudent= async (req)=>{
    const rollNo=req.params._id;
    const data=req.body;
    const result=await Students.updateOne({
        RollNo:rollNo
    },
    {
        $set:data
    }).catch((err)=>{
    
    return err;
    })

   return result;
}

const deleteStudent=async(req)=>{
    const rollNo=req.params._id;

    const result= await Students.deleteOne({
        RollNo:rollNo
    })


    return result;
}

const addStudent=async (req)=>{

    const result=await Students.create(req.body).catch((err)=>{
        return err
    })
    return result;
}
module.exports={getAllStudents,getStudentById,editStudent,deleteStudent,addStudent}