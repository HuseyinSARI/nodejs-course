import http from "http"
const port = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === "/") {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Index Page.</h1>")
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("404 Page Not Found")
    }

    res.end();
})

server.listen(port, () => {
    console.log(`server is up port: ${port} 🚀`);
})

