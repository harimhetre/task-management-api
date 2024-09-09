const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoute = require("./app/routes/user.route");
const database = require("./app/database/database");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", userRoute);

const server = http.createServer(app);

server.listen(PORT, () => {
  database.connectToMongoDB();
});
