const Mongoose = require('mongoose');
const connectionString = require('../db');

const Course = require('../models/course');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const courses = await Course.find({ $expr: { $gt: [ "$projectMarks" , "$semesterExamMarks" ] } })

        courses.forEach((course) => {
                console.log(course.courseId);
        })
    });
}

run().catch(error => console.error(error.stack));