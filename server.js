const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
