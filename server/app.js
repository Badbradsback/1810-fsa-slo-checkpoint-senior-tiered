const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const campusesSubRouter = require('./routes/campuses-router');

app.use('/campuses', campusesSubRouter);

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

module.exports = app;