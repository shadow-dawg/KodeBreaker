require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const express = require("express");
const app = express();
const path = require("path");
// const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const isLoggedIn = require("./middleware/isloggedin");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const authRoutes = require('./auth/routes');
app.use('/', authRoutes);

app.get('/', (req, res) => {
    res.send("Home");

});

// we use asyc wait for the data to be fetched from the database

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard', {username: req.user.username});
})



app.listen(3000)

