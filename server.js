var httpServer = require('http').createServer();
var socketServer = require('socket.io')(httpServer);
var data = require('./static/data/index.json');

socketServer.on('connection', function(socket){
  console.log('new socket.id', socket.id);
  socket.emit('success', {id: socket.id, ua: socket.handshake.headers['user-agent']});
});

function filter(list, count){
  var result = [];
  count = list.length > count ? count : list.length;
  list.forEach(function(item){
    if (Math.ceil(Math.random() * 10) % 2 > 0 && result.length < count) {
        result.push(item);
    }
  });
  return result;
}

//定时推送
setInterval(function () {
  socketServer.sockets.emit('index', {
    swiperlist : filter(data['swiperlist'], 3),
    likelist : filter(data['likelist'], 2),
    iconlist : filter(data['iconlist'], 6),
    hotlist : filter(data['hotlist'], 3),
    weeklist : filter(data['weeklist'], 2)
  });
},5000);

httpServer.listen(3000);
