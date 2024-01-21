const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type

  res.setHeader("Content-Type", "text/html");
  res.write('<head><link rel="styleseet" href="#"> </head>');
  res.write("<p>Hello UMA</p>");
  res.write("<p>Hello again UMAboy</p>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Port Listening for 3000");
});
