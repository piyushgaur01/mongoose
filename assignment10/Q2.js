const Mongoose = require('mongoose');
const connectionString = require('../db');

console.log(connectionString);

const Student = require('../models/student');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const result = await Student.find().distinct('currentSemester');
        console.log(result);
        process.exit(0);
    });
}

run().catch(error => console.error(error.stack));