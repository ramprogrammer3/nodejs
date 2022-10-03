
const express = require("express");
const router = express.Router();
const {ObjectId} = require("mongodb");
const {getCollection} = require("../dbConnection");
router.get("/getUsers",async(req,res)=>{
    let collection = await getCollection();
    let userData = await collection.find().toArray();
    res.json(userData);
})
router.get("/getUser/:id",async(req,res)=>{
    const collection = await getCollection();
    try {
        const user = await collection.findOne({_id : ObjectId(req.params.id)})
        res.status(302).json(user)
    } catch (err) { 
    }
})
router.post("/registerUser",async(req,res)=>{
    let collection = await getCollection();
    let result = await collection.insertOne(req.body)
    res.status(201).json(result);
})
router.post("/registerUser",async(req,res)=>{
    let {name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword){
        return res.status(206).json({Error : "field missing "});
    }else if(password !== confirmPassword){
        return res.status(417).json({Error : "password and confirmPassword does not match"});
    }else{
        try{
            let collection =  await getCollection();
            const result = await collection.insertOne(req.body)
            return res.status(201).json({Success : "user register successfully"})
        }catch(err){
            return res.status(500).json({Error : err})
        }
    }
})
router.post("/registerUser",async(req,res)=>{
    let {name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword){
        return res.status(206).json({Error : "field missing "});
    }else if(password !== confirmPassword){
        return res.status(417).json({Error : "password and confirmPassword does not match"});
    }else{
        try{
            let collection =  await getCollection();
            const result = await collection.insertOne({name,email,password})
            return res.status(201).json({Success : "user register successfully"})
        }catch(err){
            return res.status(500).json({Error : err})
        }
    }
})
router.put("/updateUser/:id",async(req,res)=>{
    let collection = await getCollection();
    try {
        let result = await collection.updateOne({_id : ObjectId(req.params.id)},{$set : req.body});
        return res.json(result)
    } catch (err) {
        return res.status(404).json({Error : "user not found with this id "})
    }
})
router.delete("/deleteUser/:id",async(req,res)=>{
    let collection = await getCollection();
    try {
        let result = await collection.deleteOne({_id : ObjectId(req.params.id)})
        if(result.deletedCount == 0){
            return res.status(404).json({Error : "no user found with this id "});
        }
        return res.json(result);
    } catch (err) {
        res.json(err);
    }
})
router.get("*",(req,res)=>{
    res.status(404).json({Error : "sorry this api is not created "});
})

module.exports = router;
