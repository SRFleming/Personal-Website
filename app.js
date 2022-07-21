// Import express
const express = require('express')
// Set your app up as an express app
const exphbs = require("express-handlebars");
const path = require("path");

const app = express()

const indexRoutes = require("./routes/indexRoutes.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

/* template engine configuration */
app.engine(
    "hbs",
    exphbs.engine({
        extname: "hbs",
    })
  );

//routes
app.set("view engine", "hbs");

// routes
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", indexRoutes);

// Tells the app to listen on port 3000 and logs that information to the
/* listen on port process.env.PORT || 8080 */
app.listen(process.env.PORT || 8080);
