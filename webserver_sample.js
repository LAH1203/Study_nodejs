const http = require('http');
 
// hostname은 컴퓨터의 IP
const hostname = '127.0.0.1';
const port = 1337;
 
/*
http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
}).listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// 위의 예시 코드와 같은 역할을 하는 코드
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});