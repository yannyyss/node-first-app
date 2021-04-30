const http = require('http')
const fs = require('fs')

// This function will run for each request reaches our server (at createServer)
// function rqListener (req, res) {

// }
// http.createServer(rqListener)

// This is the same function with diferent sintaxis for create a Server
const server = http.createServer((req, res) => {

    const url = req.url
    const method = req.method
    
    if (url  === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<form action="/message" method="POST"><input type="text" name="msg"><button type="submit">SEND</button></form') // this action redirect us to /message url
        res.write('</body>')
        res.write('</html>')
        return res.end() // To not continue with the following lines we return res.end()
    }

    if (url  === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => { // on method allow us to listen and event
            console.log('chunk', chunk) // chunk with buffer
            body.push(chunk)
        }) 
        req.on('end', () => { 
            const parseBody = Buffer.concat(body).toString() // String of the data
            const dataValue = parseBody.split('=')[1]
            fs.writeFile('message.txt', dataValue, (err) => { // This receives a third argument
                res.statusCode = 302
                return res.end()
            }) 
        })
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body>')
    res.write(`<div>${url} Page</div`)
    res.write('</body>')
    res.write('</html>')
    // process.exit() // This funciton quit the server
})

// Listening to the server in an infinite loop (event loop)
server.listen(3000)