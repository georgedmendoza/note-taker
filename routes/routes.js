// import to create unique id
var uniqid = require('uniqid');
// allowsto declare routes in any file
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
var notes = require('../db/db')
// return error when i just use var notes;
var notes;

// routes for api notes
router.get('/api/notes', (req,res) => {
    readFile();
    res.json(notes);
});
// create new note and push to variable
router.post('/api/notes', (req,res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    console.log('newNote ', newNote); 
    notes.push(newNote);
    writeFile();
    res.json(notes)
});
// function to filter through list and edit notes list
const findId = (id, listNotes) => {
    const result = listNotes.filter(note => note.id != id);
    // console.log('result',result);
    return result;
}
// delete specific id in list of notes
router.delete('/api/notes/:id', (req,res) => {
    const params = req.params.id
    // redeclare notes with filtered results
    notes = findId(params, notes);
    writeFile();
    res.send('Success!');
})

// writes file, makes d.json to string
const writeFile = () => {
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('File Saved!');
    });
};

// read file function and return to json
const readFile = () => {
    fs.readFile("./db/db.json", "utf8", (err,noteData) => {
        if (err) {
            return console.log(err);
        }
        notes = JSON.parse(noteData);
        console.log('Read File function ', noteData);
    });
};


// route for notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});
//route for index.html
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

module.exports = router;