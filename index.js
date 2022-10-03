
const express = require('express')
const port = 8080;
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

// io.on("connection",(socket)=>{
//     console.log(`user connected`)
// })

// io.on("connection",(socket)=>{
//     console.log(`user connected`)
//     socket.on("message",(msg)=>{
//         console.log(msg)
//     })
// })


// io.on("connection",(socket)=>{
//     console.log(`user connected`)
//     socket.on("message",(msg)=>{
//         io.emit("message",msg)
//     })
// })


// io.on("connection",(socket)=>{
//     console.log(`user connected`)
//     socket.on("message",(name,message)=>{
//         console.log(`${message} send by ${name}`)
//     })
// })


// io.on("connection",(socket)=>{
//     console.log(`user connected`)
//     socket.on("message",(name,message)=>{
//         console.log(`${message} send by ${name}`);
//         io.emit("message",name,message)
//     });
//     socket.on("deleteMessage",(id)=>{
//         io.emit("deleteMessage",id)
//     })
// })




// io.on("connection",(socket)=>{
//     io.emit("connection")
//     console.log(`user connected`)
//     socket.on("message",(name,message)=>{
//         console.log(`${message} send by ${name}`);
//         io.emit("message",name,message)
//     });
//     socket.on("deleteMessage",(id)=>{
//         io.emit("deleteMessage",id)
//     })
// })




let usersConnected = 0;
io.on("connection",(socket)=>{
    usersConnected++;
    io.emit("connection",usersConnected)
    console.log(`user connected`)
    socket.on("message",(name,message)=>{
        console.log(`${message} send by ${name}`);
        io.emit("message",name,message)
    });
    socket.on("deleteMessage",(id)=>{
        io.emit("deleteMessage",id)
    })

    socket.on("disconnect",()=>{
        console.log("user disconnected")
        usersConnected--;
        io.emit("connection",usersConnected)
    })
    
})




http.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
