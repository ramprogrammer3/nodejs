
const http  = require("http");
const fs = require("fs");
const axios = require('axios');
const port = 8080;
const server = http.createServer(async(req,res)=>{
    if(req.url == "/"){
        fs.readFile("./index.html",(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("page not found ");
                res.end();
            }else{
                res.writeHead(200, {'content-type': "text/html"})
                res.write(data)
                res.end();
            }
        })
    }else if(req.url== '/user'){
        res.writeHead(200,{'content-type': "application/json"})
        axios.get("https://api.itbook.store/1.0/search/mongodb")
        .then((response)=>{
            res.write(JSON.stringify(response.data.books))
            res.end()
        })

        const response = await axios.get("https://api.itbook.store/1.0/search/mongodb")
        res.write(JSON.stringify(response.data.books));
        res.end();
    }else if(req.url == "/video"){
        fs.readFile("./video.mp4",(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("vidoe not found ");
                res.end();
            }else{
                res.writeHead(200,{'content-type': "video/mp4"});
                res.write(data);
                res.end();
            }
        })
    }
})

server.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})



const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("click",()=>{
    console.log("events is triggered ");
})
emitter.emit("click");