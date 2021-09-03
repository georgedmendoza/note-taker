const express = require('express');
const app = express();
// set port env for heroku
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const allRoutes = require('./routes/routes')

// prase incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));
// use allRoutes
app.use('/', allRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})
