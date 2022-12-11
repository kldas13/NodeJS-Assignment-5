let http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  let url = req.url;
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(
      `Welcome!
       Please click the following
       <a href="http://localhost:8081/welcome">Welcome Page</a>
       <a href="http://localhost:8081/contact">Contact Page</a>`
    );
    res.end();
  } else if (url == "/welcome") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`Welcome to Dominos`);
    res.end();
  } else if (url == "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(`{phone:'18602100000', email: 'guestcaredominos@jublfood.com'} `);
    res.end();
  } else if (url == "/welcome") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`Welcome to Dominos`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write(`Page Not Found`);
    res.end();
  }
}

httpServer.listen(8081, () => {
  console.log("Server is up and Running at port 8081");
});
module.exports = httpServer;

