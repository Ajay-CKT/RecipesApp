const express = require("express");
const logger = require("./utils/logger");
const notFound = require("./utils/notFound");
const recipeRouter = require("./routes/recipeRouter");

// create an express app
const app = express();

// use the express json middleware
app.use(express.json());

// use the logger middleware
app.use(logger);

// using router
app.use("/", recipeRouter);

// not found
app.use(notFound);

// export app.js
module.exports = app;
