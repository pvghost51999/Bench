
const services=require('../services/studentService');

const getAllStudents=async(req,res)=>{

    const data=await services.getAllStudents();

    res.send(data);
}


const getStudentById=async(req,res)=>{

    const data=await services.getStudentById(req);

    res.send(data);
}


const editStudent =async(req,res)=>{

    const result=await services.editStudent(req);
    res.send(result);
}

const deleteStudent=async(req,res)=>{

    const result=await services.deleteStudent(req);

    res.send(result);
}

const addStudent=async (req,res)=>{
    const result=await services.addStudent(req);
    res.send(result);
}


module.exports={getAllStudents,getStudentById,editStudent,deleteStudent,addStudent};