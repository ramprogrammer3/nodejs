
let userData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        },
        {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
        }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
        }
        }
];


const express = require("express");
const port = 8080;
const app = express();
const http = require("http");
console.log(http.STATUS_CODES)

app.use(express.json())
app.get("/",(req,res)=>{
    res.json("hello this is express js tutorial ")
})

app.get("/user",(req,res)=>{
    res.status(302).json(userData);
})

app.post("/signup",(req,res)=>{
    console.log(req.body);
    res.status(202).json("Data found ");
})


app.post("/signup",(req,res)=>{
    let {name, email, password} = req.body;
    console.log(name);
    console.log(email);
    console.log(password);
    res.status(302).json("data found ");
})

app.post("/signup",(req,res)=>{
    let {name, email, password} = req.body;
    console.log(req.body);
    if(name){
        return res.status(202).json("data found ");
    }else{
        res.status(204).json("data not found ");
    }
})
app.use("*",(req,res)=>{
    res.status(404).json({Error : "not found "});
    
})


const schoolRoutes = require('./views/schoolRoutes');
const ecommerceRoutes = require('./views/eCommerce');
app.use(express.json());
app.use(schoolRoutes);
app.use(ecommerceRoutes)

app.use("*",(req,res)=>{
    res.status(404).json({Error : "not found "});
})

app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`);
})