var express = require('express'),path=require('path');

var http=require('http');

var customerApp = require('./customer/router.js');


var port = process.env.port || 8000;

var app =express();

app.set("port",port);

var server = http.createServer(app);

server.on("connection",(socket)=>{
    console.log("Socket Connected");
});

app.use('/customer',customerApp);
server.listen(app.get("port"),()=>{
console.log("Server is running at %d",app.get("port"));
});