// allows you to declare routes in any file
const router = require('express').Router();
const path = require('path');
 // gets all notes=db.json
const notes  = require('../db/db');

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
    res.json(notes)
});

module.exports = router;