var http=require('http');
var port=3000;
var host='127.0.0.1';

var server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello I am learning Node js\n");
    response.end("server is fine working");
});

server.listen(port,host,(error)=>{
    if(error){
        return console.log("Error"+error);
    }
    console.log("server is listening on "+host+":"+port);
});