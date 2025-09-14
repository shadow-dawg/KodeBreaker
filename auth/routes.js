const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// Signup page
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Signup logic
router.post('/signup', async (req, res) => {
    let { username, email, password } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                password: hash,
            });
            let token = jwt.sign({ email }, process.env.JWT_SECRET);
            res.cookie('token', token);
            res.redirect('/dashboard');
            // res.send("User Created Successfully");
        });
    });
});

// Login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Login logic
router.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.send("Something Went Wrong");
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
            res.cookie('token', token);
            res.redirect('/dashboard');
        } else res.send("something is wrong");
    });
});

router.get("/logout", (req, res) => {
    res.cookie('token', "");
    res.redirect('/');
})

module.exports = router;