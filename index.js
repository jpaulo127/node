const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('hello World');
})

server.listen( port, host, ()=>{
    console.log(`servidor rodando em http://${host}:${port}/`)
})
