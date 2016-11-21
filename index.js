/**
* Static HTTP Server
*
* Create a static file server instance to serve files
* and folder in the './public' folder
*/

// modules
const staticServer = require('node-static');
const http = require('http');

const port = 8080;


// config
const file = new staticServer.Server('./public', {
  cache: 31536000,
  gzip: true,
});

// serve
http.createServer((request, response) => {
  request.addListener('end', () => {
    file.serve(request, response, (e) => {
      if (e && (e.status === 404)) {
        file.serveFile('/404.html', 404, {}, request, response);
      }
      if (e && (e.status === 500)) {
        file.serveFile('/500.html', 500, {}, request, response);
      }
    });
  }).resume();
}).listen(port);
