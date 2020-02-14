const express = require("express");
require("dotenv").config();
const massive = require("massive");
const app = express();

const { getHouses } = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.error(err));

app
  .use(express.json())
  .get("/api/houses", getHouses)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));