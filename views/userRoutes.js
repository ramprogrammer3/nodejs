

const express = require("express")
const router = express.Router();
const userModel = require("../models/userSchema")

router.post("/registerUser",(req,res)=>{
    const user = new userModel(req.body)
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})


router.get("/getAllUsers",(req,res)=>{
    userModel.find((err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

router.get("/getAllUser",(req,res)=>{
    userModel.findOne({_id : "630334569962479efaec1c41"},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


router.get("/getAllUser",(req,res)=>{
    userModel.find({name : "mohit"},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


router.get("/getAllUser",(req,res)=>{
    userModel.findOne({name : "mohit"},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


router.get("/getUser/:name",(req,res)=>{
    userModel.findOne({name : req.params.name},(err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})


router.get("/getUser/:id",(req,res)=>{
    userModel.findOne({ _id : req.params.id},(err,users)=>{
        if(err || !users){
            if(!users){
               return res.status(404).json({Error : "no user found with this id"})
            }
          return  res.json(err)
        }else{
          return  res.json(users)
        }
    })
})



router.put("/updateUser/:id",(req,res)=>{
    userModel.updateOne({ _id : req.params.id},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})


router.put("/updateUser/:name",(req,res)=>{
    userModel.updateMany({ name : req.params.name},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})


router.put("/updateUser/:name",(req,res)=>{
    userModel.updateMany({ name : req.params.name},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})





module.exports = router;













// restApi




const express = require("express")
const router = express.Router();
const userModel = require("../models/userSchema")
const { body, validationResult } = require('express-validator');

router.post("/users",(req,res)=>{
    const user = new userModel(req.body)
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})

router.get("/users",(req,res)=>{
    userModel.find((err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

router.get("/users/:id",(req,res)=>{
    userModel.findOne({ _id : req.params.id},(err,users)=>{
        if(err || !users){
            if(!users){
               return res.status(404).json({Error : "no user found with this id"})
            }
          return  res.json(err)
        }else{
          return  res.json(users)
        }
    })
})

router.put("/users/:name",(req,res)=>{
    userModel.updateMany({ name : req.params.name},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

module.exports = router;



const express = require("express")
const router = express.Router();
const userModel = require("../models/userModel")
const { body, validationResult } = require('express-validator');

router.post("/users",
body('email').isEmail(),    
(req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
    const user = new userModel(req.body)      
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})



router.post("/users",
body('email', "not in the email format").isEmail(), 
body('phoneNo',"phoneNo must be 10 characters").isLength({ min: 10 }),
(req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
    const user = new userModel(req.body)      
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})


router.post("/users",
body('email', "not in the email format").isEmail(), 
body('phoneNo',"phoneNo must be 10 characters").isLength({ min: 10 }),
(req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
    const user = new userModel(req.body)      
    user.save((err,savedUser)=>{
        if(err){
            res.json(err)
        }else{
            res.json(savedUser)
        }
    })
})

router.get("/users",(req,res)=>{
    userModel.find((err,users)=>{
        if(err){
            res.json(err)
        }else{
            res.json(users)
        }
    })
})

router.get("/users/:id",(req,res)=>{
    userModel.findOne({ _id : req.params.id},(err,users)=>{
        if(err || !users){
            if(!users){
               return res.status(404).json({Error : "no user found with this id"})
            }
          return  res.json(err)
        }else{
          return  res.json(users)
        }
    })
})

router.put("/users/:name",(req,res)=>{
    userModel.updateMany({ name : req.params.name},req.body,(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

router.delete("/users/:id",(req,res)=>{
    userModel.deleteOne({ _id : req.params.id},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

module.exports = router;