console.log("Hello world ");
console.log(global)
console.log(__dirname)
console.log(__filename)

const os = require("os")
console.log(os.version())
console.log(os.platform())
console.log(os.cpus())
console.log(os.hostname())


const addNumber = require("./app")
const result = addNumber(3, 4);
console.log(result);


const {addNumber,subNumber} = require("./app")
const result1 = addNumber(3,5);
const result2 = subNumber(4,2);
console.log(result1)
console.log(result2)


const {addNumber, subNumber} = require("./app")
const result1 = addNumber(3,4);
const result2 = subNumber(3,5);
console.log(result1);
console.log(result2)