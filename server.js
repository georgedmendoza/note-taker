// gets all notes=db.json
const  notes  = require('./db/db');
const express = require('express');
const app = express();
const path = require('path');

// need this later when in move my code
// const router = require('express').Router();

// set port env for heroku
const PORT = process.env.PORT || 3001;



// route for notes.html
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});
//route for index.html
app.get('./index', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// rout for api
app.get('/api/notes', (req,res) => {
    res.json(notes);
    console.log(notes);
});

app.post('/api.notes', (req,res) => {
    res.json(notes)
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})
