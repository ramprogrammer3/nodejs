const express = require("express")
const app = express()
const port = 8080;
const http = require("http").createServer(app)
const io = require('socket.io')(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

let userCount = 0;

io.on("connection",(socket)=>{
    userCount++;
    io.emit("connection",userCount)
    console.log("user connected ")
    socket.on("message",(name,message)=>{
        io.emit("message",name,message)
    })
    socket.on("deleteMessage",(id)=>{
        io.emit("deleteMessage",id)
    })

    socket.on("disconnect",()=>{
        userCount--;
        io.emit("connection",userCount)
    })
})

http.listen(port,()=>{
    console.log(`server is running on  port ${port}`)
})