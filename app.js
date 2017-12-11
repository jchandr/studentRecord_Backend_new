const express = require('express');
const app = express();

const studentRoutes = require('./api/routes/studentRoutes');
const facultyRoutes  = require('./api/routes/facultyRoutes');

app.use('/students', studentRoutes);
app.use('/faculties', facultyRoutes);

module.exports = app;
