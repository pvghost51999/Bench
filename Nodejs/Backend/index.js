const express=require('express');

const teacherRouter=require('./Routes/teacherRouter');
const studentRouter=require('./Routes/studentRouter');
const app=express();
require('dotenv').config();
require('./config')
app.use(express.json());

app.use('/teacher',teacherRouter);
app.use('/student',studentRouter);

port=process.env.PORT;

app.listen(port,()=>{

    console.log("server started at 6060");
})

