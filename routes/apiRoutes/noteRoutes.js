const router = require('express').Router();
const fs = require('fs');
const allNotes = require('../../db/db');
const { postNewNote, deleteNote } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    // let savedNotes = allNotes;
    res.json(allNotes)
});

router.post('/notes', (req, res) => {
    let newNote = postNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    let savedNotes = allNotes
    let noteID = req.params.id;
   
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })


    let data = JSON.stringify(savedNotes);

    fs.writeFile('./db/db.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    res.json(data)
    
});

module.exports = router;
