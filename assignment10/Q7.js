const Mongoose = require('mongoose');
const connectionString = require('../db');

console.log(connectionString);

const Applicant = require('../models/applicant');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const result = await Applicant.find(
            {
                $or: [
                    { City: 'Mysore' },
                    { City: 'Bangalore' }
                ]
            },
            {applicantName: true, _id: false}
        )
        console.log(result);
        process.exit(0);
    });
}

run().catch(error => console.error(error.stack));