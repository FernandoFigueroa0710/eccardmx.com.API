const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "your_database_user",
    password: "your_database_password",
    database: "myapp_test"
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
  console.log(`I am running on port 3001`);
});
