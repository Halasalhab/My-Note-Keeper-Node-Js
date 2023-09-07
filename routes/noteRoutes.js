const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  searchNotes,
} = require('../controllers/noteController');

// GET all notes
router.get('/notes', getAllNotes);

// POST a new note
router.post('/notes', createNote);

// DELETE a specific note
router.delete('/notes/:id', deleteNote);

// PUT (update) a specific note
router.put('/notes/:id', updateNote);

// GET notes by search query
router.get('/notes/search', searchNotes);

module.exports = router;
