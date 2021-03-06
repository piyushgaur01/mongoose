const Mongoose = require('mongoose');
const connectionString = require('../db');

const Instructor = require('../models/instructor');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const date = new Date('01-Jan-2002');
        const result = await Instructor.find({'dateOfJoining': { $lt: date }}).distinct('instructorName');
        console.log(result);
        process.exit(0);
    });
}

run().catch(error => console.error(error.stack));