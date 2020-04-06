const express = require("express");
const dotenv = require("dotenv");
const Router = require("./Routes/quiz");
const app = express();

dotenv.config({ path: "./config/config.env" });

app.use("/api/v1", Router);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`Server running at ${PORT} with env:${process.env.NODE_ENV}... `)
);
