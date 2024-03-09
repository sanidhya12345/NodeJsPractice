var express=require('express');

var app=express();

app.get('/motu',(request,response)=>{
    response.send("this is motu don page");
})
app.get('/',(request,response)=>{
    response.send("Welcome");
})
app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})