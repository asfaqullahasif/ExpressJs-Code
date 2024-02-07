const express = require('express');

const app = new express();


app.get('/',function(req,res){
    res.send("I am from express server");
})


// Simple string response
app.get('/simple',function(req,res){
    res.send("I am a simple string response");
//     res.send() method indicates response body
})
app.get('/simpleResponse',function(req,res){
    res.end("I am also a simple string response");
//     res.end() method indicates end point of response.
})

// working with response status

app.get('/statusResponse',function(req,res){
    res.status(201).end("Created");
    /*
    =============OR============
    res.status(201);
    res.end();
     */
})


// Working with JSON response

app.get('/jsonResponse',function(req,res){

    let myJSONArray = [
        {
            name:"Asif",
            country:"Bangladeshi",
            district:"Rajshshi",
            profession:"Unemployed"

        },
        {
            name:"Ahasan",
            country:"Bangladeshi",
            district:"Dhaka",
            profession:"Student"
        },
        {
            name:"Aayan",
            country:"Bangladeshi",
            district:"Naogeaon",
            profession:"Doctor"
        }
    ]
    res.json(myJSONArray);
})

// working with download response

app.get('/download',function(req,res){
    res.download('./Uploads/pic.jpg');
})

// working with Response Redirect

app.get('/redirect',function(req,res){
    res.redirect("http://localhost:8000/destination");
})
app.get('/destination',function (req,res){
    res.send("You redirect me here!");
})


// working with Response Header

app.get('/responseHeader',function(req,res){
    res.append("name","asfaq");
    res.append("age",35);
    res.append("city","Rajshahi");
    res.status(201).end("Response Header set successfully");
})

// working with Response cookie

app.get("/cookieResponse",function(req,res){
    res.cookie("name","Asif");
    res.cookie("city","Dhaka");
    res.cookie("profession","software Engineer");
    res.end("Cookies set successfully");
})

app.get('/clearCookie',function(req,res){
    res.clearCookie("name");
    res.clearCookie("city");
    res.clearCookie("profession");

    res.end("just cookies cleared successfully");
})
app.listen(8000,function(){
    console.log("Server run in Port:8000");
})