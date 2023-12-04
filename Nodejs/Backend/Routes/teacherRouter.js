const express=require('express');

const studentController=require('../controller/studentController');
const teacherRouter=express.Router();

teacherRouter.get("/result",studentController.getAllStudents);

teacherRouter.post("/result/add",studentController.addStudent);

teacherRouter.patch("/result/:_id",studentController.editStudent);


teacherRouter.delete("/result/:_id",studentController.deleteStudent);



module.exports=teacherRouter;