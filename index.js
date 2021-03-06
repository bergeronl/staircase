const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => res.redirect('/static/calculator.html'));

app.listen(3000);
