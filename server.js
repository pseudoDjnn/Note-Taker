// DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

// PORT SPCIFICITY
const PORT = process.env.PORT || 3001;

// INSTANCE OF SERVER
const app = express();

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});
