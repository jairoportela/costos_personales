require("dotenv").config();
const express = require("express");
require("./connection/db");
const app = express();
const PORT = process.env.PORT || 3000;

const expenceRoute = require("./routes/expense.route")

app.use(express.json());

app.use("/expense", expenceRoute);

app.listen(PORT, () => console.log("Listen PORT: " + PORT))