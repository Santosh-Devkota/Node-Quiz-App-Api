const express = require("express");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  console.log("this is get request !");
});

module.exports = Router;
