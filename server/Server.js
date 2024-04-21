require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/studentsInfo')
const userRoutes = require('./routes/user')
const courseRoutes = require('./routes/course')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/students', studentRoutes)
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
