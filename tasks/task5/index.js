import http from "http";

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Index Page</h1>")
    } else if (url === "/aboutme") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>About Me</h1>")
    } else if (url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Contact</h1>")
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("404 Page Not Found")
    }

    res.end();

})

server.listen(5000, () => {
    console.log("server is up port 5000");
})