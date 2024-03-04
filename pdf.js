var http=require('http');
var fs=require('fs');

http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"application/pdf"});
    fs.readFile('index.pdf',(error,data)=>{
        if(error){
            throw error;
        }
        console.log("success");
        response.end(data);
    });
}).listen(3000);