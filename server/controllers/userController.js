const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const createToken = (_id, role) => {
    return jwt.sign({_id, role}, process.env.SECRET, { expiresIn: '1d' })
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    
    try {
        const user = await User.login(email, password)

        // Extract _id and role from the user object
        const { _id, role } = user;

        // create a token
        const token = createToken(_id, role)

        console.log({ _id, role });
        res.status(200).json({email, token, role})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {email, password, role} = req.body

    try {
        const user = await User.signup(email, password, role)

        // create a token
        const token = createToken(user._id, role)

        console.log(req.body)

        res.status(200).json({email, token, role})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}


module.exports = { loginUser, signupUser, getUsers }