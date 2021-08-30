// allows you to declare routes in any file
const router = require('express').Router();
const path = require('path');
 // gets all notes=db.json
const notes  = require('../db/db');
console.log(typeof notes);
console.log(notes);
const fs = require('fs');

// route for notes.html
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});
//route for index.html
router.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

// rout for api
router.get('/api/notes', (req,res) => {
    res.json(notes);
    // console.log(notes);
});

router.post('/api/notes', (req,res) => {
    const newNote = req.body;
    console.log(newNote);  // currently reading newNote as undefined
    notes.push(newNote);
    res.json(notes)
});


//make ds.json a string
fs.writeFileSync("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('File Saved!');
});

fs.readFile("./db/db.json", "utf8", (err,log) => {
    if (err) {
        return console.log(err);
    }
    console.log(log);
});

module.exports = router;