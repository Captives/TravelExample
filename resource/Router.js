var RouteHandler = require('./RouterHandler');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var url = require('url');

function Router() {

};

Router.parsePostBody = function (req, done) {
  var arr = [];
  var chunks;

  req.on('data', buff => {
    arr.push(buff);
  });

  req.on('end', () => {
    chunks = Buffer.concat(arr);
    switch (req.headers['content-type']) {
      case 'text/plain':
        done(chunks.toString());
        break;
      case 'application/json':
        done(JSON.parse(chunks));
        break;
      case 'application/x-www-form-urlencoded':
        done(JSON.parse(JSON.stringify(querystring.parse(chunks.toString()))));
        break;
      default:
        done(chunks);
    }
  });
};

Router.prototype.handler = function (req, res) {
  var item = url.parse(req.url);
  switch (item.pathname){
    case '/favicon.ico': break;
    case '/':
      RouteHandler.startup(req, res);
      break;
    case '/api':
      if (req.method == "GET") {
        RouteHandler.api(item.query, res);
      } else if (req.method == "POST") {
        Router.parsePostBody(req, function (data) {
          RouteHandler.api(data, res);
        })
      }
      break;
    case '/search':
      RouteHandler.searchIp(item.query, res);
      break;
    default:
      RouteHandler.notFound(req, res);
      break;
  }
};

module.exports = new Router();
