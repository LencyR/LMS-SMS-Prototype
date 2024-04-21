const Course = require('../models/CourseModel');
const mongoose = require('mongoose');

const createCourse = async (req, res) => {
    const {title, description} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const user_id = req.user._id;
        const course = await Course.create({ title, description, user_id })
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCourses = async (req, res) => {
    const { role } = req.user;

    if (role === 'admin' || role === 'student') {
        // If the requester is an admin, fetch all courses
        const courses = await Course.find().sort({ createdAt: -1 });
        res.status(200).json(courses);
    } else {
        // For non-admin users, fetch only courses associated with their user_id
        const user_id = req.user._id;
        const courses = await Course.find({ user_id }).sort({ createdAt: -1 });
        res.status(200).json(courses);
    }
}

const getCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course found"})
    }

    const course = await Course.findById(id)

    if (!course) {
        return res.status(404).json({error: 'No such course found'})
    }

    res.status(200).json(course)
}

const deleteCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course found"})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if (!course) {
        return res.status(404).json({error: 'No such course found'})
    }

    res.status(200).json(course)
}

const updateCourse = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such course found"})
    }

    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!course) {
        return res.status(404).json({error: 'No such course found'})
    }

    res.status(200).json(course)
}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    updateCourse
}