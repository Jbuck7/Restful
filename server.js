const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const cors = require('cors');

app.use(cors());

// Serve JPEG image
app.get('/headshot', (req, res) => {
  const filePath = path.join(__dirname, 'Headshot.jpg');
  res.setHeader('Content-Type', 'image/jpeg');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      res.status(404).send('File not found');
    } else {
      res.send(data);
    }
  });
});

// Serve PDF
app.get('/resume', (req, res) => {
  const filePath = path.join(__dirname, 'JosephBuck.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      res.status(404).send('File not found');
    } else {
      res.send(data);
    }
  });
});

// Serve Text
app.get('/text', (req, res) => {
  const filePath = path.join(__dirname, 'text.txt');
  res.setHeader('Content-Type', 'text/plain');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      res.status(404).send('File not found');
    } else {
      res.send(data.toString());
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});