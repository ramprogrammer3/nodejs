
const axios = require('axios');
const express = require("express");
const router = express.Router();

router.get("/book",async(req,res)=>{
    try{
        const response = await axios.get("https://api.itbook.store/1.0/search/mongodb")
        res.status(302).json(response.data.books)
    }catch(err){
        res.status(500).json({Error : err})
    }
})

router.get("/customer",async(req,res)=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.status(302).json(response.data);
    } catch (err) {
        res.status(500).json({Error : err})
    }
})


module.exports = router;