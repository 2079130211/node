const http = require("http");

const fs = require("fs");

const query  = require("querystring");


const singup = require('./node-api/account/signup');

const route = (response,status,type,path)=>{
    fs.readFile(path,(error_,data)=>{
        response.writeHead(status,{
            'content-type':type
        });
        response.write(data);
        response.end();
    });
}

const server = http.createServer((request, response)=>{
    if(request.url == '/' || request.url == '/home' ){
       let path = 'html/index.html';
       let type = 'text/html';
       let status = 200;
       route(response,status,type,path);
    } 
    else if(request.url == '/css/index.css'){
        let path = 'assets/css/index.css';
        let type = 'text/css';
        let status = 200;
        route(response,status,type,path);
     } 

     else if(request.url == '/js/index.js'){
        let path = 'assets/js/index.js';
        let type = 'text/javascript';
        let status = 200;
        route(response,status,type,path);
     } 

     else if(request.url == '/api/singup'){
        singup.result(request,response);
     } 
    else{
        let path = 'html/404.html';
        let type = 'text/html';
        let status = 404;
        route(response,status,type,path);

    }
});

server.listen(8080);



