const Student = require('../models/StudentModel')
const mongoose = require('mongoose')

const getStudents = async (req, res) => {
    const students = await Student.find({}).sort({createdAt: -1})

    res.status(200).json(students)
}

const getStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such student found"})
    }

    const student = await Student.findById(id)

    if (!student) {
        return res.status(404).json({error: 'No such student found'})
    }

    res.status(200).json(student)
}

const createStudent = async (req, res) => {
    const {name, age, email, address} = req.body

    try {
        const student = await Student.create({ name, age, email, address })
        res.status(200).json(student)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such student found"})
    }

    const student = await Student.findOneAndDelete({_id: id})

    if (!student) {
        return res.status(404).json({error: 'No such student found'})
    }

    res.status(200).json(student)
}

const updateStudent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such student found"})
    }

    const student = await Student.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!student) {
        return res.status(404).json({error: 'No such student found'})
    }

    res.status(200).json(student)
}

module.exports = {
    createStudent,
    getStudents,
    getStudent,
    deleteStudent,
    updateStudent
}