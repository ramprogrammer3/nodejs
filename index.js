
const jwt = require('jsonwebtoken')
let secretKey = "shhh";
let payload = {
    name : "ram"
}
const token = jwt.sign(payload, secretKey)
console.log(token)




const jwt = require('jsonwebtoken')
let secretKey = "shhh";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFtIiwiaWF0IjoxNjYxMjE3NjQwfQ.fFw4kAMpxcS6Y7TbIDZDrBs8Phcj9s-aOXRMedztrFg"
let decodedData = jwt.verify(token,secretKey)
console.log(decodedData)


const jwt = require('jsonwebtoken')
let secretKey = "shhh";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFtZXNoIiwiaWF0IjoxNjYxMjE3NjQwfQ.GC1uOdchccBFs7mH7K1wKT8Ii5Rx1l5Y8yCG0XgIIzY"
try{
    let decodedData = jwt.verify(token,secretKey)
    console.log(decodedData)
}catch(err){
    console.log("Invalid token")
}



const jwt = require('jsonwebtoken')
let secretKey = "shhh";
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFtZXNoIiwiaWF0IjoxNjYxMjE3NjQwfQ.GC1uOdchccBFs7mH7K1wKT8Ii5Rx1l5Y8yCG0XgIIzY"
try{
    let decodedData = jwt.verify(token,secretKey)
    console.log(decodedData)
}catch(err){
    console.log("Invalid token")
}



bcrypt 

const bcrypt = require('bcrypt')
const hashedPassword = bcrypt.hashSync("1234",4)
console.log(hashedPassword)







