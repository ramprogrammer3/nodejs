
const express = require("express");
const router = express.Router();

router.get("/getStudents",(req,res)=>{
    res.status(302).json("student data found ")
})

router.get("/getTeacher",(req,res)=>{
    res.status(302).json("Teacher data found ");
})

router.post("/register",(req,res)=>{
    console.log(req.body);
    res.status(201).json("register successfully");
})



module.exports = router;