const express = require('express')
const {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse
} = require('../controllers/CourseController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all student routes
router.use(requireAuth)

router.get('/', getCourses, (req, res, next) => {
    const role = req.user.role;
    if (!checkPermissions(role)) {
        return res.status(403).json({ error: 'Unauthorized access' });
    }
    next();
});

router.get('/:id', getCourse)

router.post('/', createCourse)

router.delete('/:id', deleteCourse)

router.patch('/:id', updateCourse)


module.exports = router