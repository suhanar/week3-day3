var http = require('http');
var dt = require('./myDateTime');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url ,true).query;
    var txt = q.year + ' '+q.month;
    res.write("The date and time : " + dt.myDateTime());
    res.end(txt);
  }).listen(8080);