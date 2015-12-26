var express = require('express');
var subApp = express();
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
subApp.use(bodyParser.urlencoded({extended:true}));
var seqQueue = require('seq-queue');

subApp.use(bodyParser.json());

app.use(function(req,res,next){
    res.send('404 resource not found');
    next();
});
var socketIo = require('socket.io');
var io = socketIo(server);
io.on('connection',function(socket){
    console.log('connected');
    var router = require('./router.js')(socket);
    subApp.use('/api',router);
});
subApp.use(express.static(path.join(__dirname,'public')));
console.log('running in port 8000');
server.listen(8001);
subApp.listen(8000);
