const express = require("express")

const port = 8080;

const app = express();

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});