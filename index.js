
const fs = require("fs");

const files = fs.readdirSync("./folder1");
console.log(files)

const files = fs.readdirSync("./folder1");
console.log("file is reading here ")
console.log(files)


fs.readdir('./folder1',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
})


const text = fs.readFileSync("./folder1/file1.txt",'utf-8');
console.log(text);

fs.readFile("./folder1/file1.txt","utf-8",(err,data)=>{
    if(!err){
        console.log(data);
    }else{
        console.log(err)
    }
})



let text = "this is simple text ";
fs.writeFile("./folder1/file2.txt",text.trim(),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('text is written');
    }
})


let text = "node js ";
fs.appendFile("./folder1/file2.txt",text.trim(),(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("text is appended ");
    }
})


fs.mkdir("newFolder",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("folder is created ");
    }
})


fs.mkdir("./folder1/folder2",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("folder is created ");
    }
})


if(fs.existsSync("newFolder")){
    console.log("folder exit");
}else{
    console.log("folder does not exit");
}

try{
    fs.renameSync("./app.js",'app1.js')
}catch(err){
    console.log("file does not exit")
}


fs.unlinkSync('./app1.js')


try {
    fs.rmdirSync("./folder1/folder2");
    console.log("folder is deleted ");
} catch (err) {
    console.log('folder does not exit');
}


try {
    fs.unlinkSync('./folder1/file1.txt');
    fs.unlinkSync('./folder1/file2.txt');
    console.log("file is deleted ")
} catch (err) {
    console.log('file does not exit');
}


try{
    fs.rmdirSync("./folder1");
    console.log("folder is deleted ");
}catch(err){
    console.log("folder does not exit");
}


try{
    fs.rmdirSync("newFolder");
    console.log("folder is deleted ");
}catch(err){
    console.log("folder does not exit");
}



const add = require("./app");
const {sub, mul} = require("./app");
const result1 = add(3,4);
const result2 = sub(3,5);
const result3 = mul(3,5);
console.log(result1);
console.log(result2);
console.log(result3);