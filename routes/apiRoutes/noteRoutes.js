const router = require('express').Router();
const  allNotes = require('../../db/db');
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
    deleteNote(allNotes, req.params.id);
    res.json(allNotes);
});

module.exports = router;
