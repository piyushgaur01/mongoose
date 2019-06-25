const Mongoose = require('mongoose');
const connectionString = require('../db');

const Course = require('../models/course');
const Branch = require('../models/branch');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const courses = await Course.find({
            $or :[
                { semester: 1 },
                { semester: 2 }
            ]
        }).populate('branch');

        courses.forEach((course) => {
            if (course.branch.branchId === 'B1')
                console.log(course.branch.branchName);
        })
    });
}

run().catch(error => console.error(error.stack));