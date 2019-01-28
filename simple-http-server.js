const http = require('http');
const port = 3000;

//handles HTTP requests
const requestHandler = (request, response) => {
    fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');
};

//creates server and passes in the requestHandler function
const server = http.createServer(requestHandler);

//starts the server listening on port 3000

server.listen(port, (err) => {
    if (err) {
        return console.log('you have an error: ${err}');
    }

    console.log('server is listening on ${port}');
});

