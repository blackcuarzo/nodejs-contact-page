const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method } = req;

  if (method == "GET") {
    const path = req.url;

    switch (path) {
      case "/":
        return writeFile("./index.html", res).then(() => res.end());
      case "/about":
        return writeFile("./about.html", res).then(() => res.end());
      case "/contact-me":
        return writeFile("./contact-me.html", res).then(() => res.end());
      default:
        return writeFile("./404.html", res).then(() => res.end());
    }
  }
  res.end("Method not available");
});

const writeFile = (filePath, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  return fs.promises.readFile(filePath).then((data) => {
    //   process.stdout.write(data);
    res.write(data);
  });
};

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
