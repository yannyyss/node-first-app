const http = require('http')
const routes = require('./routes.js') // have to use a path because is a custome file

// This function will run for each request reaches our server (at createServer)
// function rqListener (req, res) {

// }
// http.createServer(rqListener)

// This is the same function with diferent sintaxis for create a Server
const server = http.createServer(routes) // now we use routes as a callback function

// Listening to the server in an infinite loop (event loop)
server.listen(3000)