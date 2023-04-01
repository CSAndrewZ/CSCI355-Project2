const express = require('express');
const path = require('path');
const app = express();

// Using the files from the directory
app.use(express.static(path.join(__dirname, 'WebSite Files')));

//Route to each html pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'WebSite Files', 'home.html'));
});

app.get('/men', (req, res) => {
  res.sendFile(path.join(__dirname, 'WebSite Files', 'men.html'));
});

app.get('/women', (req, res) => {
  res.sendFile(path.join(__dirname, 'WebSite Files', 'women.html'));
});

// Port 5555 is where we will test our node app on localhost
app.listen(5555, () => console.log('Ready to listen on port 5555'));