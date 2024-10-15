var express=require("express")
var app=express();

var mysql2=require("mysql2")
var j=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:""
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

var port=100
app.listen(port,()=>{

console.log(port)
})