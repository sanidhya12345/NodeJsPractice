var express=require('express');
var app=express();

app.get('/',(request,response)=>{
    response.send('Hello world!');
})
app.listen(3000,()=>{
    console.log("server is listening at 3000");
})