const mongoose = require("mongoose");
const app = require("./app");
const { mongoDbURL, PORT } = require("./utils/config");

mongoose
  .connect(mongoDbURL)
  .then(() => {
    console.log("Connected to the database...");
    // listen for requests and start the server after connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is running...`);
    });
  })
  .catch((error) => console.error(error));
