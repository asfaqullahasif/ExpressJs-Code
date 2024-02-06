const express= require('express');

const app = new express();


app.get('/',function(req,res){
    res.send("I am coming from Express JS server...");
})
app.listen(8080,function(){
    console.log("Server is running at port no:8080");
})
