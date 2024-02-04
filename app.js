const express = require("express");
const { get } = require("lodash");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {title : 'Home'});
});
app.get("/about", (req, res) => {
  res.render("about", {title : 'About'});
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {title : 'Create'});
});

app.get("/about-us", (req, res) => {
  res.redirect("/about", {title : 'About-Us'});
});

app.use((req, res) => {
  res.sendFile("/views/404.html", {title : 'Error'});
});
