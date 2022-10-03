

const express = require('express');
const app = express();
const port = 8080;
const http = require("http");
console.log(http.STATUS_CODES)
const userRoutes = require("./views/userRoutes");
app.use(express.json());
app.use(userRoutes);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})