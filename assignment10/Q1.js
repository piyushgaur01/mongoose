const Mongoose = require('mongoose');
const connectionString = require('../db');

const Applicant = require('../models/applicant');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const result = await Applicant.find().distinct('City');
        console.log(result);
    });
}

run().catch(error => console.error(error.stack));