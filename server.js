// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

// ROUTES FOR SERVER
const apiRoutes = require("./routes/apiRoutes");

// PORT SPCIFICITY
const PORT = process.env.PORT || 3001;

// INSTANCE OF SERVER
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

// DB JSON DATA
app.use(express.json());

app.use(express.static("public"));
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
