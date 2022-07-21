const express = require("express");
const router = express.Router();

/* greeting page */
router.get("/", (req, res) => {
  res.render("index", { layout: "main", style: "index.css"});
});

module.exports = router;