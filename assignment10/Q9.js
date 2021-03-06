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
                { semester: 3 },
                { semester: 4 }
            ]
        }).populate({
            path: 'branch',
            match: { 'branchId' :{ $eq: 'B1'} }
        });

        courses.forEach((course) => {
                console.log(course.branch);
        })
    });
}

run().catch(error => console.error(error.stack));