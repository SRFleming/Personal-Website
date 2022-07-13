// Import express
const express = require('express')
// Set your app up as an express app
const exphbs = require("express-handlebars");
const path = require("path");

const app = express()

/* template engine configuration */
app.engine(
    "hbs",
    exphbs.engine({
      extname: "hbs",
    })
  );
app.set("view engine", "hbs");

app.get('/', (req, res) => {
res.send('Our demo app is working!')
});
// Tells the app to listen on port 3000 and logs that information to the
/* listen on port process.env.PORT || 8080 */
app.listen(process.env.PORT || 8080);
