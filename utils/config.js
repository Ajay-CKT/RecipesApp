require("dotenv").config();
const mongoDbURL = process.env.mongoDbURL;
const PORT = process.env.PORT;

module.exports = { mongoDbURL, PORT };
