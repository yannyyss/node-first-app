const http = require('http')


// This function will run for each request reaches our server (at createServer)
// function rqListener (req, res) {

// }
// http.createServer(rqListener)

// This is the same function with diferent sintaxis for create a Server
const server = http.createServer((req, res) => {
    console.log("req.url", req.url, "req.method", req.method , "req.headers", req.headers)
    // process.exit() // This funciton quit the server
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>Hello</html>')
})

// Listening to the server in an infinite loop (event loop)
server.listen(3000)