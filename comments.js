// Create web server
// Path: comments.js
// Compare this snippet from skills.js:
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

