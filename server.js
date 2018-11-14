var SocketCluster = require('./socket/SocketCluster');
var TravelSocket = require('./socket/TravelSocket');
var httpServer = require('http').createServer();

const log4js = require('./config/Logger');
const console= log4js.getLogger('index');

httpServer.listen(3000, function () {
  console.log('服务启动完成');
  // var socket = new TravelSocket(httpServer, '/trave');
  var cluster = new SocketCluster(httpServer, '/cluster');
});

