// DEPENDENCIES
const fs = require("fs");
const path = require("path");

const notes = require("../db/db.json");

function createsNewNote(body, notesArray) {
  const notes = body;
  if (!Array.isArray(notesArray))
    // creates an empty array
    notesArray = [];

  if (notesArray.length === 0) notesArray.push(0);

  body.id = notesArray[0];
  notesArray[0]++;

  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return notes;
}

// const { v4: uuidv4 } = require("uuid");

module.exports = function (router) {
  // GET REQUEST
  router.get("/api/notes", (req, res) => {
    res.json(notes.slice(1));
  });

  // POST REQUEST
  router.post("/api/notes", (req, res) => {
    //  creates new note
    const newNote = createsNewNote(req.body, notes);
    res.json(newNote);
  });
};
