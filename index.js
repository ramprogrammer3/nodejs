
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
        }
];

let postData = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
];

// console.log("node part 3 ");
const http = require("http");
const port = 8080;
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url == '/user'){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify(userData));
        res.end();
    }else if(req.url == "/post"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify(postData));
        res.end();
    } else if(req.url == "/home"){
        fs.readFile("./index.html",(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("Page not found ");
                res.end();
            }else{
                res.writeHead(200, {'content-type': "text/html"});
                res.write(data);
                res.end();
            }
        })
    }else if(req.url == "/image"){
        fs.readFile("./image1.jpg",(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write("image not found");
                res.end();
            }else{
                res.writeHead(200, {"content-type" : "image/jpg"});
                res.write(data);
                res.end();
            }
        })
    }else if(req.url == "/video"){
        fs.readFile("./video.mp4",(err,data)=>{
            if(err){
                res.writeHead(404)
                res.write("vidoe not found ");
                res.end();
            }else{
                res.writeHead(200,{'content-type': "video/mp4"});
                res.write(data);
                res.end();
            }
        })
    }
    else{
        res.write("Home page ");
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`server is runnin on port ${port}`);
})