const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes')
const allNotes = require('../../db/db');

router.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

router.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});
module.exports = router;