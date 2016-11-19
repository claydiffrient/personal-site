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
    file.serve(request, response);
  }).resume();
}).listen(port);
