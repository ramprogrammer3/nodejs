
const events = require('events');
const emitter = new events.EventEmitter();

emitter.on("scream",()=>{
    console.log("scream event is triggered");
})

emitter.emit("scream");


emitter.on("click",()=>{
    console.log('click event is called ');
})
emitter.emit("click");


emitter.on('click',()=>{
    console.log("click event is triggered ");
})
emitter.emit("ram");


const fs = require("fs");
fs.readFile("./ram.txt",'utf-8',(err,data)=>{
    console.log(data.toString())
})


const fs = require("fs");
const readStream = fs.createReadStream("./ram.txt","utf-8");
readStream.on("data",()=>{
    console.log("data is being read");
})




const fs = require("fs");
const readStream = fs.createReadStream("./ram.txt","utf-8");
readStream.on("data",(data)=>{
    console.log(data.length);
})