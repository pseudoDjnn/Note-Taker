// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

// ROUTES FOR SERVER
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// PORT SPCIFICITY
const PORT = process.env.PORT || 3001;

// INSTANCE OF SERVER
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

// DB JSON DATA
app.use(express.json());

// PUBLIC FOLDER DISPLAY
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// CLI PORT
app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
