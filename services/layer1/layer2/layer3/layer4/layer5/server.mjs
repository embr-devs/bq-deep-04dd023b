import http from 'node:http';
http.createServer((_request, response) => {
  response.writeHead(200);
  response.end('deep-04dd023b');
}).listen(Number(process.env.PORT ?? 8080), '0.0.0.0');
