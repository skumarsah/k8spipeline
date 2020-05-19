'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(app.router);
app.get('/', (req, res) => {
  res.send('Congratulations! The Pipeline is Ready');
});
app.get('/nodejs', (req, res) => {
  res.redirect('https://www.magicsqaure.games')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
