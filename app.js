const express = require("express");
const { get } = require("lodash");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  res.sendFile("/views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.sendFile("/views/404.html", { root: __dirname });
});
