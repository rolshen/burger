const express = require("express");
const bodyParser = require("body-parser");


const app = express();

var port = process.env.PORT || 8060;

app.get("/", function(req, res){
    console.log("hello simple");
    res.send("hello simple")
    
  }) 
  
  
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  