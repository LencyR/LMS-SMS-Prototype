const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {

    // verify authentication
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id, role } = jwt.verify(token, process.env.SECRET)

        console.log("Role from token:", role);

        // Retrieve the user's role from the database
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare roles from token and database
        if (user.role !== role) {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        // Check if the user's role has the necessary permissions
        if (!checkPermissions(role)) {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        req.user = user;

        // req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

const checkPermissions = (role) => {
    // Define role-based permissions
    const rolePermissions = {
        admin: true, // Admin has access to all routes
        teacher: false,
        student: true
        // Define permissions for other roles as needed
    };

    // Check if the role has permission to access any routes
    return rolePermissions[role] || false;
};


module.exports = requireAuth, checkPermissions;