
// console.log("Node js tutorial")

const express = require('express');
const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})


app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})



mySql connection 

const mysql = require("mysql")
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "123456A$"
})
db.connect((err)=>{
    if(!err){
        console.log("dB connection successful")
    }else{
        console.log("DB connection failed ")
    }
})
app.get("/",(req,res)=>{
    let sqlQuery = `SELECT * FROM world.city;`;
    db.sqlQuery(sqlQuery,(err,resultData)=>{
        if(!err){
            res.json(resultData);
        }
    })
})



const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ramkumar:334300@cluster0.lerh1za.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connection successful");
}).catch(()=>{
    console.log("DB connection failed ");
})




app.set("view engine",'ejs');
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        title : "welcome to ejs",
        name : ["ram","shyam","mohan"]
    })
})


const mysql = require('mysql');
const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : "123456A$"
})
db.connect((err)=>{
    if(err){
        console.log("DB connection failed ");
    }else{
        console.log("DB connection  successful ");
    }
})
app.get("/table",(req,res)=>{
    let sqlQuery = `SELECT * FROM world.city;`;
    db.query(sqlQuery,(err,result)=>{
        if(!err){
            res.send(result);
        }
    })
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})