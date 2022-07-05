// Your code here
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
    `;
    res.end(responseBody);
});

server.listen(3000, () => {
    console.log(`Server listening on port 3000`);
})