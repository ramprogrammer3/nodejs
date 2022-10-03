

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ramkumar:334300@cluster0.lerh1za.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
function getCollection(){
    return new Promise((resolve,reject)=>{
        client.connect((err )=> {
            if(!err){
                console.log("DB connection successful");
                const collection = client.db("test").collection("devices");
                resolve(collection);
            }else{
                reject(err);
            }
            // perform actions on the collection object
            // client.close();
          });
    })
}


module.exports = {
    getCollection
}