const EventEmitter = require('events').EventEmitter;
const io = require('socket.io');
const redis = require('socket.io-redis');
const config = require('./../config/index');

const log4js = require('./../config/Logger');
const console = log4js.getLogger('SocketCluster');
var socketServer = null;

const NameSpace = {DEFAULT: '/'};
module.exports = SocketCluster;
function SocketCluster(server, path) {
  var that = this;
  socketServer = io().listen(server, {
    path: path, transports: ['websocket']
  });
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

  // socketServer.of(NameSpace.DEFAULT).adapter.remoteJoin('socket id', 'room id', function (err) {
  // 让socket给定的id加入房间。回调将在socket加入到房间后触发，否则如果没有找到socket客户端，会提供一个err 参数
  // });

  // socketServer.of(NameSpace.DEFAULT).adapter.remoteLeave('socket id', 'room id', function (err) {
  // 使给定socketid的客户端离开房间。回调将在客户端离开房间后触发，如果没找到socket客户端，则会返回一个arr参数.
  // });
}

/**
 * 把socket存储管理器
 * @param socket
 */
SocketCluster.prototype.onConnection = function (socket) {
  var that = this;
  socket.emit('connected', socket.address, socket.ua);
  //用户加入区域
  socket.on('join', function (name, region, callback) {
    socket.td = region.id;
    socket.joinInfo = {
      uuid: socket.id,
      id: region.id,
      name: region.label,
      userName: name
    };
    console.info(socket.td, socket.joinInfo);
    that.roomManagement(socket);
    callback(socket.joinInfo);
  });
};

//房间管理
SocketCluster.prototype.roomManagement = function (socket) {
  var that = this;
  that.roomListen();
  that.getClient(socket.td).then(function (clients) {
    return that.roomMember(clients);
  }).then(function (members) {
    console.log(socket.td, '已经在线的用户', JSON.stringify(members));
    socket.join(socket.td);
    socket.emit('success', members);
    //发给所有人, 包含自己
    socketServer.to(socket.td).emit('userEntry', socket.joinInfo);
  });
};

SocketCluster.prototype.getClient = function (td) {
  return new Promise(function (resolve, reject) {
    socketServer.in(td).clients(function (err, clients) {
      console.log(td, 'Client list', clients, err);
      resolve(clients);
    });
  });
};

SocketCluster.prototype.roomMember = function (clients) {
  var data = {event: 'member', clients: clients};
  return new Promise(function (resolve, reject) {
    socketServer.of(NameSpace.DEFAULT).adapter.customRequest(data, function (err, replies) {
      console.log(clients, 'replies', replies.length, replies, err);
      if (err) {
        resolve(null);
      }
      if(replies && replies.length){
        var list = [];
        replies.forEach(function (item) {
           if(item && item.length){
             list = list.concat(item);
           }
        });
        resolve(list);
      }else{
        resolve(null);
      }
    });
  });
};

/**
 * 节点房间监听
 */
SocketCluster.prototype.roomListen = function () {
  socketServer.of(NameSpace.DEFAULT).adapter.customHook = function (data, callback) {
    switch (data && data.event) {
      case 'member':
        var list = [];
        data.clients = data.clients || [];
        data.clients.forEach(function (socketId) {
          const socket = socketServer.of(NameSpace.DEFAULT).connected[socketId];
          if (socket) {
            socket.joinInfo.pid = process.pid;
            list.push(socket.joinInfo);
          }
        });
        console.log(data.clients, '查询结果', JSON.stringify(list));
        callback && callback(list);
        break;
    }
    callback && callback([]);
  }
};


//socket断开的处理
SocketCluster.prototype.onDisconnect = function (socket, info) {
  socketServer.to(socket.rid).emit('userLeave', socket.joinInfo);
};

const util = require('util');
util.inherits(SocketCluster, EventEmitter);
