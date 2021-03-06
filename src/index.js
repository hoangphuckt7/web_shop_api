const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const db = require("./config/db");
const route = require("./routes");

dotenv.config();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});

//connect db
db.connect();

//ROUTES Init
route(app);
