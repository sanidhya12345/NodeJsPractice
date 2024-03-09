var http=require('http');
var host='127.0.0.1';
var port=3000;
var server=http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello laaddoo motu don ");
    response.end();
})
server.listen(port,host,(error)=>{
    if(error) throw error;
    console.log("server is listening at port 3000");
})