const express = require("express");
const { get } = require("lodash");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.sendFile("/views/404.html", { root: __dirname });
});
