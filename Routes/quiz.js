const express = require("express");

const Router = express.Router();

Router.get("/home", (req, res, next) => {
  console.log("this is get request !");
});
Router.post("/home", (req, res, next) => {
  console.log("this is get request !");
});
Router.get("/", (req, res, next) => {
  console.log("this is get request !");
});

Router.get("/:id", (req, res, next) => {
  console.log("this is get request !");
});
Router.post("/:id", (req, res, next) => {
  console.log("this is get request !");
});
Router.put("/", (req, res, next) => {
  console.log("this is get request !");
});
Router.delete("/", (req, res, next) => {
  console.log("this is get request !");
});

module.exports = Router;
