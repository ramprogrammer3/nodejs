const express = require('express')
const app = express()
const port = 8080;

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json(userData)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})




const express = require('express')
const app = express()
const port = 8080;

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;

let isAdmin = true
app.get("/",(req,res,next)=>{
    if(isAdmin == true){
        next()
    }else{
        res.send("Your are not admin, you dont have access")
    }
},(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})




const express = require('express')
const app = express()
const port = 8080;

let isAdmin = true
let checkAdmin = (req,res,next)=>{
    if(isAdmin == true){
        next()
    }else{
        res.send("Your are not admin, you dont have access")
    }
}
app.get("/",checkAdmin,(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",checkAdmin,(req,res)=>{
    res.json({name : "ram kumar"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})




const express = require('express')
const app = express()
const port = 8080;

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    res.send('testing here ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;

app.use((req,res,next)=>{
    next()
    console.log("global middle ware")
})
app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    res.send('testing here ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",express.json(),(req,res)=>{
    console.log(req.body)
    res.send('testing here ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


const express = require('express')
const app = express()
const port = 8080;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send('Welcome to express js ')
})

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.send('testing here ')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


const express = require('express')
const app = express()
const port = 8080;
// const http = require("http")
// console.log(http.STATUS_CODES)

app.use(express.json())

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    // res.send({"name" : "ram"})
    res.status(201).json("this is text")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


const express = require('express')
const app = express()
const port = 8080;

// app.use(express.json())

let isAdmin = false

let checkAdmin = (req,res,next)=>{
    if(isAdmin == true){
        res.json("you can access")
    }else{
        res.status(401).json("you can not access")
    }
}
app.get("/user",checkAdmin,(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.status(201).json(userData)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


const express = require('express')
const app = express()
const port = 8080;

app.use(express.json())

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})
app.get("*",(req,res)=>{
    res.status(404).json({Error : "not found"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.status(201).json(userData)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;

app.use(express.json())

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})
app.get("*",(req,res)=>{
    res.status(404).json({Error : "not found"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.status(201).json(userData)
})

app.post("*",(req,res)=>{
    res.status(404).json({Error : "not found"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

const express = require('express')
const app = express()
const port = 8080;

app.use(express.json())

app.get("/user",(req,res)=>{
    res.json({name : "ram kumar"})
})

app.post("/signup",(req,res)=>{
    console.log(req.body)
    res.status(201).json(userData)
})

app.use("*",(req,res)=>{
    res.status(404).json({Error : "not found"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})



const express = require('express')
const app = express()
const port = 8080;


const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    res.json("welcome to express")
})

router.get("/user",(req,res)=>{
    res.json({name : 'ram kumar'})
})

router.post("/signup",(req,res)=>{
    console.log(req.body)
    res.json("data found")
})

module.exports = router;

const userRoutes = require("./views/users")
app.use(express.json())
app.use(userRoutes)

app.get("/products",(req,res)=>{
    res.json(userData)
})
app.use("*",(req,res)=>{
    res.status(404).json({Error : "not found"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})





