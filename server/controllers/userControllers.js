// ============ RESGISTER NEW USER
// POST : api/users/register
// UNPROTECTED
const registerUser = (req, res, next) => {
    res.json("Register User")
}


// ============ LOGIN A REGISTERED USER
// POST : api/users/login
// UNPROTECTED
const loginUser = (req, res, next) => {
    res.json("Login User")
}

// ============ USER PROFILE
// POST : api/users/:id
// PROTECTED
const getUser = (req, res, next) => {
    res.json("User Profile")
}

// ============ CHANGE USER AVATAR (Profile Picture)
// POST : api/users/change-avatar
// PROTECTED
const changeAvatar = (req, res, next) => {
    res.json("Change User Avatar")
}


// ============ EDIT USER DETAILS (From profile)
// POST : api/users/edit-user
// PROTECTED
const editUser = (req, res, next) => {
    res.json("Edit User Details")
}

// ============ GET AUTHORS
// POST : api/users/authors
// UNPROTECTED
const getAuthors = (req, res, next) => {
    res.json("Get all users/authors")
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}