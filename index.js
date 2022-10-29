const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method } = req;

  if (method == "GET") {
    const path = req.url;

    switch (path) {
      case "/":
        return res.end("Home");
      case "/about":
        return res.end("About");
      case "/contact-me":
        return res.end("Contact");
      default:
        return res.end("404");
    }
  }
  res.end("Method not available");
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
