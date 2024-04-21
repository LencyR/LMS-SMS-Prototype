const express = require('express')
const {
    createStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updateStudent
} = require('../controllers/StudentController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all student routes
router.use(requireAuth)

router.get('/', getStudents, (req, res, next) => {
    const role = req.user.role; // Assuming the user role is stored in req.user.role
    if (!checkPermissions(role)) {
        return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
});

router.get('/:id', getStudent)

router.post('/', createStudent)

router.delete('/:id', deleteStudent)

router.patch('/:id', updateStudent)


module.exports = router