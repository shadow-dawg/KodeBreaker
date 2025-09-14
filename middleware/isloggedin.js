const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

async function isLoggedIn(req, res, next) {
    if (!req.cookies.token) return res.redirect("/login");
    try {
        // Use the secret from environment variables
        const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        // Fetch the full user from the database
        const user = await userModel.findOne({ email: data.email });
        if (!user) return res.redirect("/login");
        req.user = user; // Attach the full user object
        next();
    } catch (err) {
        res.redirect("/login");
    }
}

module.exports = isLoggedIn;