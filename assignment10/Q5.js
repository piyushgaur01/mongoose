const Mongoose = require('mongoose');
const connectionString = require('../db');

console.log(connectionString);

const Course = require('../models/course');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const result = await Course.find({elective: 'N'}).distinct('courseName');
        console.log(result);
        process.exit(0);
    });
}

run().catch(error => console.error(error.stack));