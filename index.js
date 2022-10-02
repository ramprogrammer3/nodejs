

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
        },
];

const http =require("http");
const fs = require("fs");
const axios = require('axios');
const port = 8080;

const server = http.createServer(async(req,res)=>{
    if(req.url == "/data"){
        res.writeHead(200);
        res.write("Hello world");
        res.end();
    }else if(req.url == "/users"){
        res.writeHead(200,{'content-type': "application/json"});
        res.write(JSON.stringify(userData));
        res.end();
    }else if(req.url == "/user"){
        res.writeHead(200,{'content-type': "application/json"});
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            res.write(JSON.stringify(response.data));
            res.end();
        })

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.write(JSON.stringify(response.data));
        res.end();
    }else if(req.url == '/image'){
        fs.readFile("./image1.jpg",(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("Image not found ");
                res.end();
            }else{
                res.writeHead(200, {"content-type": "image/jpg"})
                res.write(data);
                res.end();
            }
        })
    }
    
    else{
        res.write("404 page not found ");
        res.end();
    }
})


server.listen(port,()=>{
    console.log(`server is runnin on port ${port}`);
})


const readText = fs.createReadStream("./ram.txt","utf-8")
readText.on("data",(data)=>{
    // console.log(data.toString())

    fs.writeFile("./text.txt",data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("data is written in file ");
        }
    })
})


const axios = require("axios");
const response = axios.get("https://jsonplaceholder.typicode.com/users")
console.log(response);



const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data);
}).catch((err)=>{
    console.log(err);
})
console.log("Code after api call ")



const axios = require("axios");
async function getData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response);
}
getData();
console.log("Code after the api call")





const fs = require('fs');
let files = fs.readdirSync("./folder1")
console.log(files);

if(files.length == 0){
    fs.rmdirSync("./folder1")
}else{
    files.map((item,i)=>{
        fs.unlinkSync(`./folder1/${item}`);
    })
    fs.rmdirSync("./folder1");
}