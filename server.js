const express = require("express");
const app = express();
const db = require("./db"); 
require('dotenv').config();
const passport = require('./auth');
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// const PORT = 8090; 
const PORT=process.env.PORT ||8090

//middleware function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware function
};

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const personRoutes = require("./routes/personRoutes");
const MenuItemRoutes = require("./routes/menuRoutes");

app.use("/person", personRoutes);
app.use("/menu",MenuItemRoutes);


app.listen(PORT, () => {
  console.log("Server is running on port 8090");
});
