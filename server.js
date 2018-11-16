const SocketCluster = require('./socket/SocketCluster');
const TravelSocket = require('./socket/TravelSocket');
const httpServer = require('http').createServer();

const log4js = require('./config/Logger');
const console= log4js.getLogger('index');

const Router = require('./resource/Router');
httpServer.on('request', Router.handler);

httpServer.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

httpServer.listen(3000, function () {
  console.log('服务启动完成');
  // var socket = new TravelSocket(httpServer, '/trave');
  var cluster = new SocketCluster(httpServer, '/cluster');
});

