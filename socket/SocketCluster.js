const EventEmitter = require('events').EventEmitter;
// const EventEmitter = require('wolfy87-eventemitter');
const io = require('socket.io');
const redis = require('socket.io-redis');
const config = require('./../config/index');

const log4js = require('./../config/Logger');
const console = log4js.getLogger('SocketCluster');
var socketServer = null;

module.exports = SocketCluster;
function SocketCluster(server, path) {
  var that = this;
  socketServer = io().listen(server, {path: path});
  socketServer.adapter(redis(config.redis));
  socketServer.use(function (socket, next) {
    socket.address = (socket.handshake.headers['x-forwarded-for'] ||
                    socket.request.connection.remoteAddress ||
                    socket.handshake.address).replace("::ffff:", "");
    socket.ua = socket.handshake.headers['user-agent'];
    socket.query = socket.handshake.query;
    //报错给客户端
    //return next(new Error('Authentication error'));
    next();
  });

  socketServer.on('connection', function (socket) {
    console.log("TD new socket", socket.id, socket.address, JSON.stringify(socket.query));
    socket.on('disconnect', function (info) {
      that.onDisconnect(socket, info);
    });
    that.onConnection(socket);
  });
}

/**
 * 把socket存储管理器
 * @param socket
 */
SocketCluster.prototype.onConnection = function (socket) {
  socket.emit('connected', socket.address, socket.ua);
  //用户加入区域
  socket.on('join', function (name, region) {
    socket.uid = region.id;
    socket.userName = name;
    socket.userRegion = region;
    socket.join(socket.uid);
    //TODO 此处应该获取已经在线的所有用户信息
    console.info(socket.uid, socket.userName, socket.userRegion);
    socket.emit('success', {id:socket.id, name:socket.userName, region:socket.userRegion});
    socketServer.to(region.id).emit('userEntry', {id:socket.id, name:socket.userName, region:socket.userRegion});
  });
};

//socket断开的处理
SocketCluster.prototype.onDisconnect = function (socket, info) {
  // socketServer.to(socket).emit('userEntry');
  // socketServer.to(socket).emit('userLeave');
};

const util = require('util');
util.inherits(SocketCluster, EventEmitter);
