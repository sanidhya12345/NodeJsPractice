var http=require('http');
var host='127.0.0.1';
var port=3000;

var server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    console.log("server is working");
    response.end("sever working success");
})

server.listen(port,host,(error)=>{
    if(error){
        return console.log('Error Occurred '+error);
    }
    console.log('server is listening on '+host+' : '+port);
})
