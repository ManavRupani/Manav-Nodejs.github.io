require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.static('public'));
//template engine

app.use(expressLayout);
app.set('layout','./layouts/main');//3rd part module or midleware
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main')); //this is our layout from main.js
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});