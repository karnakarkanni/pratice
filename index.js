var express=require("express")
var app=express();
require("dotenv").config();
var mysql2=require("mysql2")
var j=mysql2.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
})
j.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to mysql")
    }
})


app.get("/",(req,res)=>{
    res.send("hello")


})

var port=process.env.port;
app.listen(port,()=>{

console.log(port)
})