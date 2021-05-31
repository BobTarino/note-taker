const router = require('express').Router();
const { allNotes } = require('../../db/db');
const { createNewNote, deleteNote } = require('../../lib/notes')


router.get('/api/notes', (req, res) => {
    let savedNotes = allNotes;
    res.json(savedNotes)
});

router.post('/api/notes', (req, res) => {
    req.body.id = allNotes.length.toString();
    let newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
    deleteNote(allNotes, req.params.id);
    res.json(allNotes);
});

module.exports = router;
