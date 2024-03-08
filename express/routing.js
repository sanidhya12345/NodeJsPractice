var express=require('express');
var app=express();
var fs=require('fs');

fs.readFile('file.txt','utf-8',(error,data)=>{
    if(error) throw error;
    app.get('/',(request,response)=>{
        response.send("This is the first webpage of my website");
    });
    app.get('/about',(request,response)=>{
        response.send(data);
    })
    app.listen(3000,()=>{
        console.log("server is listening at port 3000");
    })
})