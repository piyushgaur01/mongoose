const Mongoose = require('mongoose');
const connectionString = require('../db');

const CourseAllocation = require('../models/course-allocation');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        let instructorIds = await CourseAllocation.find().distinct('instructorId');
        const courseIds = await CourseAllocation.find().distinct('courseId');
        console.log(instructorIds);
        console.log(courseIds);
        process.exit(0);
    });
}

run().catch(error => console.error(error.stack));