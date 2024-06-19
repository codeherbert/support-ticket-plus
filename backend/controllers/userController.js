const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

// @desc Register a new user 
// @route /api/users 
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if(!name || !email || !password) {
        // removed for custom error handler
        // return res.status(400).json({message: "Please include all fields"});
        res.status(400);
        throw new Error("Please include all fields");
    }

    // Find if user already exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error("That user already exists");
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            password: user.password
        })
    }
    else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});

// @desc Login a user
// @route /api/users/login 
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.send("Login Route");
});

module.exports = {
    registerUser,
    loginUser
};