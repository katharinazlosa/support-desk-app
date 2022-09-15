const asyncHandler = require('express-async-handler')

// @desc   register a new user
// @route  /api/users
// @access Public 
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body

    //validation
    if (!name || !email || !password) {
        return res.status(400)
        throw new Error('Please include all fields')
    }

    res.send('Register route')
})

// @desc   login a new user
// @route  /api/users/login
// @access Public 

const loginUser = asyncHandler(async (req, res) => {
    res.send('Login route')
})

module.exports = {
    registerUser,
    loginUser
}