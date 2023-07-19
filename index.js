// express server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// import the routes
const routes = require("./routes");

// use the routes
app.use("/", routes);

// start the server
app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
