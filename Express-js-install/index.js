const express= require('express');

const app = new express();


app.get('/',function(req,res){
    res.send("<h1>This is my Home Page!</h1>");
})

app.get('/about',function (req,res){
    res.end("<h1>This is My About Page.</h1>")
})

app.get("/contact",function(req,res){
    res.end("<h1>This is My Contact Page.</h1>");
})

// without get method we can not see that route through the browser, let's examine it

app.get('/view',function(req,res){
    res.end("I am coming from Express Server!");
})
app.post('/create',function(req,res){
    res.send("I am created successfully");
})
app.put('/update',function(req,res){
    res.end("I am updated.");
})
app.delete('/delete',function(req,res){
    res.end("Are you sure? to delete me!");

})

app.listen(8080,function(){
    console.log("Server is running at port no:8080");
})
