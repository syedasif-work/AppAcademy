const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        console.log(reqBody);
        req.body = parseBody(reqBody);
        sendFormPage(req, res);
    });
})

server.listen(3000, () => {
    console.log("Server is listening on port 5000");
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };