const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end("welcome to my page")

    }if(req.url ==="/about"){
        return res.end('here is about us ')

    }
    return res.end(`<h1>OOOPS</h1>
    <p>we cant seem to find the page you are looking for </p>
    <a href="/"> Home</a> `)
})

server.listen(5000)