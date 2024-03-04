var fs=require('fs');

//Old data

// fs.readFile('hello.txt',(error,data)=>{
//     if(error) throw error;
//     console.log("Old data:- "+data);
// })

//append new data into the file...
var content='I am a software developer from India';
fs.appendFile('hello.txt',content,(error)=>{
     if(error) throw error;
     console.log("data appended successfully");
})

fs.readFile('hello.txt',(error,data)=>{
    if(error) throw error;
    console.log("New Data: "+data);
})