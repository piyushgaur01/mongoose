const Mongoose = require('mongoose');
const connectionString = require('./db');

console.log(connectionString);

// Change these values
const Applicant = require('./models/applicant');
const Student = require('./models/student');
const data = require('./data/data').studentData;


async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        data.forEach((entry) => {
            Applicant.findOne({ applicantId: entry[1] }, function (err, applicant) {
                let obj = new Student({
                    _id: new Mongoose.Types.ObjectId(),
                    studentId: entry[0],
                    applicantId: applicant._id,
                    currentSemester: entry[2],
                    userId: entry[3],
                    password: entry[4]
                });

                obj.save((err) => {
                    if (err) {
                        console.log(`Entry ${entry[0]} NOT SAVED!. Error: ${err.message}`);
                    } else {
                        console.log(`Entry ${entry[0]} saved successfully!`);
                    }
                });
            });
        });
    });
}

run().catch(error => console.error(error.stack));