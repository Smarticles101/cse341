const db = require("./db/database");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// initialize the database
db.init((err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Database initialized!");
});

// import the routes
const routes = require("./routes");

app.use(bodyParser.json());

// use the routes
app.use("/", routes);

// start the server
app.listen(port, () => {
  console.log(`app listening at ${port}`);
});
