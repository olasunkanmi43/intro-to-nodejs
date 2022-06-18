const express = require('express');

const app = express();


app.use(express.urlencoded({extended:true}));



app.get("/", function(req, res) {
    
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", function(req, res) {
    
    res.sendFile(__dirname + "/about.html");
})

app.get("/contact", function(req, res) {
    
    res.sendFile(__dirname + "/contact.html");
})



app.listen(2100, function(){
    console.log("Server Started on Port 2100");
})

