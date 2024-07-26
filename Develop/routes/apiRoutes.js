const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
  const dbPath = path.join(__dirname, '../db/db.json');

  app.get('/api/notes', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  app.post('/api/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() };

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        const notes = JSON.parse(data);
        notes.push(newNote);

        fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
          } else {
            res.json(newNote);
          }
        });
      }
    });
  });

  app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;

    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        const notes = JSON.parse(data);
        const updatedNotes = notes.filter(note => note.id !== noteId);

        fs.writeFile(dbPath, JSON.stringify(updatedNotes), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
          } else {
            res.json({ id: noteId });
          }
        });
      }
    });
  });
};
