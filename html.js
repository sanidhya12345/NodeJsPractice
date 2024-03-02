var http=require('http');
var fs=require('fs');

var server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile('index.html',(error,data)=>{
        if(error){
            throw error;
        }
        console.log("Operation Success");
        response.end(data);
    });
}).listen(3000);