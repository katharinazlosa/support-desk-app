// @desc   register a new user
// @route  /api/users
// @access Public 
const registerUser = (req, res) => {
    res.send('Register route')
}

// @desc   register a new user
// @route  /api/users
// @access Public 

const loginUser = (req, res) => {
    res.send('Login route')
}

module.exports = {
    registerUser,
    loginUser
}