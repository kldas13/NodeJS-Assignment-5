let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.status(200).send(`Welcome!
  Please click the following
  <a href="http://localhost:8081/welcome">Welcome Page</a>
  <a href="http://localhost:8081/contact">Contact Page</a>`);
});

app.get("/welcome", (req, res) => {
  res
    .status(200)
    // .setHeader("content-type", "text/plain")
    .json("Welcome to Dominos!!");
  // res.status(200).send("Welcome to Dominos!!");
});

app.get("/contact", (req, res) => {
  res
    .status(200)
    .setHeader("content-type", "text/json")
    .send("{phone:'18602100000', email: 'guestcaredominos@jublfood.com'}");
});

app.get("*", (req, res) => {
  res.status(404).send("PAGE IS NOT FOUND");
});

app.listen(8081, () => {
  console.log("Server is up and Running at 8081 Port");
});

// const httpServer = http.createServer(handleServer);

// function handleServer(req, res) {
//   let url = req.url;
//   if (url == "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(
//       `Welcome!
//        Please click the following
//        <a href="http://localhost:8081/welcome">Welcome Page</a>
//        <a href="http://localhost:8081/contact">Contact Page</a>`
//     );
//     res.end();
//   } else if (url == "/welcome") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.write(`Welcome to Dominos`);
//     res.end();
//   } else if (url == "/contact") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(`{phone:'18602100000', email: 'guestcaredominos@jublfood.com'} `);
//     res.end();
//   } else if (url == "/welcome") {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.write(`Welcome to Dominos`);
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.write(`Page Not Found`);
//     res.end();
//   }
// }

// httpServer.listen(8081, () => {
//   console.log("Server is up and Running at port 8081");
// });
// module.exports = httpServer;
