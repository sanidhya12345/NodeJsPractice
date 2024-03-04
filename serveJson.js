var http = require('http');

http.createServer((request , response)=>{
    response.writeHead(200,{"Content-Type":"text/json"});
    let json={
        status:200,
        message:"successful",
        code:2000
    };
    response.end(JSON.stringify(json));

}).listen(3000);