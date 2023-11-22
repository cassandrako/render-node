const express = require('express');
const randomAnimals = require('@sefinek/random-animals');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const data = await randomAnimals.dog();
    console.log(data);
    const imageUrl = data.message || data; 
    res.send(`<html><body><img src="${imageUrl}" alt="Random Dog"/></body></html>`);
  } catch (error) {
    console.error('Error fetching dog image:', error);
    res.status(500).send('Error fetching dog image');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
