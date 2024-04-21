const express = require('express');

const { loginUser, signupUser, getUsers } = require('../controllers/userController');

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.get('/', getUsers)

module.exports = router;