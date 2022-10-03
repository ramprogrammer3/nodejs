
setTimeout(()=>{
    console.log("line 4 executed ");
},0)

console.log('Line no 7 executed ');


setTimeout(()=>{
    console.log("first settimeout after 3 second ");
    setTimeout(()=>{
        console.log("second settimeout after 1 second ");
        setTimeout(()=>{
            console.log("third settimeout after .5 second ");
        },500)
    },1000)
},3000)



const axios = require("axios")
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response.data)
    return "random text";
}).then((response1)=>{
    console.log(response1)
}).catch((err)=>{
    console.log(err);
})



function getData(second){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            "user data ";
        },second * 1000)

    })
}
getData(3)

function getData(second){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(`user data after ${second} second `)
        },second * 1000)

    })
}
getData(3)
.then((response)=>{
    console.log(response)
})




function getData(second){
    return new Promise((resolve,reject)=>{
        if(second > 5){
            reject("promise rejected because time taken is more than 5 second ")
        }else{
        setTimeout(()=>{
           resolve(`user data after ${second} second `)
        },second * 1000)
    }

    })
}


getData(6)
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log("failure respose " + err);
})


getData(2)
.then((response)=>{
    console.log(response)
  return  getData(3)
}).then((response1)=>{
    console.log(response1)
    return getData(.5)
}).then((response2)=>{
    console.log(response2)
})
.catch((err)=>{
    console.log("failure respose " + err);
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ramkumar:334300@cluster0.lerh1za.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        const result = await collection.find().toArray();
    }else{
        console.log("DB connection failed ");
    }
  // perform actions on the collection object
  client.close();
});








const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ramkumar:334300@cluster0.lerh1za.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
function getCollection(){
client.connect(async(err) => {
    if(!err){
        console.log("DB connection successful")
        const collection = client.db("test").collection("devices");
        return collection;
    }else{
        console.log("DB connection failed ");
    }
  // perform actions on the collection object
  client.close();
});
}
getCollection()



const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://ramkumar:334300@cluster0.lerh1za.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
function getCollection(){
    return new Promise((resolve,reject)=>{
        client.connect(async(err) => {
            if(!err){
                console.log("DB connection successful")
                const collection = client.db("test").collection("devices");
                resolve(collection);
            }else{
                console.log("DB connection failed ")
                reject(err);
            }
          // perform actions on the collection object
        //   client.close();
        });
    })
}


const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());
app.get("/getUser",async(req,res)=>{
    let collection = await getCollection();
    let userData = await collection.find().toArray();
    res.status(302).json(userData);
})
app.post("/registerUser",async(req,res)=>{
    let colletion = await getCollection();
    let result = await colletion.insertOne(req.body);
    res.status(201).json(result);
})
app.put("/updateUser/:id",async(req,res)=>{
    let collection = await getCollection();
    let result = await collection.updateOne({_id : ObjectId(req.params.id)},{$set : req.body})
    res.json(result);
})
app.delete("/deleteUser/:id",async(req,res)=>{
    let collection = await getCollection();
    let result = await collection.deleteOne({_id : ObjectId(req.params.id)})
    res.json(result);
})
app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})



