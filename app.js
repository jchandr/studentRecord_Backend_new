const express = require('express');
const app = express();

const studentRoutes = require('./api/routes/studentRoutes');
const facultyRoutes  = require('./api/routes/facultyRoutes');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/students', studentRoutes);
app.use('/faculties', facultyRoutes);

module.exports = app;
