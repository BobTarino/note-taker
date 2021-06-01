const router = require('express').Router();
const fs = require('fs');
const allNotes = require('../../db/db');
const { postNewNote, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    let savedNotes = allNotes;
    res.json(savedNotes)
});

router.post('/notes', (req, res) => {
    let newNote = postNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("../../db/db.json", "utf8"));
    let noteID = req.params.id;
    let newID = 0;
    console.log(`Deleting note with ID ${noteID}`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })
    
    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
});

module.exports = router;
