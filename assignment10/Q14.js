const Mongoose = require('mongoose');
const connectionString = require('../db');

const Registration = require('../models/registration');

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        const results = Registration.aggregate([
            { $project:
                { 
                    student: 1,
                    total: { $add: [ "$projectMarks" , "$semesterExamMarks", "$assignmentMarks", "$internalMarks" ] }      
                }
            },
          ]);

          console.log(results);
        // const results = await Registration.find({ $sum: [ "$projectMarks" , "$semesterExamMarks", "$assignmentMarks", "$internalMarks" ] })

        // results.forEach((result) => {
        //         console.log(result);
        // })
    });
}

run().catch(error => console.error(error.stack));