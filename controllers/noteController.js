const Note = require('../models/Note');

// GET all notes
async function getAllNotes(req, res) {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// POST a new note
async function createNote(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// DELETE a specific note
async function deleteNote(req, res) {
  const noteId = req.params.id;

  try {
    const deletedNote = await Note.findByIdAndRemove(noteId);
    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// PUT (update) a specific note
async function updateNote(req, res) {
  const noteId = req.params.id;
  const { title, content } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function searchNotes(req, res) {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
  console.log(query)
    try {
      const notes = await Note.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
        ],
      });
      res.json(notes);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  module.exports = {
    getAllNotes,
    createNote,
    deleteNote,
    updateNote,
    searchNotes, 
  };