const express = require("express");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const todoRoutes = require("./routes/todoRoutes");
const db = require("./config/database");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Set Handlebars as view engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Routes
app.use("/", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
