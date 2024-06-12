import express from "express";
const app = express();
// const path = require('path');
import { fileURLToPath } from 'url';

import path from 'path';
const port = 3000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

app.use((req, res) => { 
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});




// app.get("/", (req, res) => {
//   res.send("index.html");
// });

// app.get("/about", (req, res) => { 
//     res.send("about.html");
// })