const express = require('express');
const app = express();
const PORT = proccess.envPORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})