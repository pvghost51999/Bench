const mongoose=require('mongoose');

const database="ResultManagement"
const url=process.env.MONGODB_URl+database;



mongoose.connect(url).then(()=>{
    console.log("database connections is stablised" )
}).catch((err)=>{
    console.log("error",err);
})