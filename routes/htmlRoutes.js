// DEPENDENCIES
const path = require("path");
const router = require("express").Router();

// ROUTES
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
