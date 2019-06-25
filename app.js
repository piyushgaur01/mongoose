const Mongoose = require('mongoose');
const connectionString = require('./db');

console.log(connectionString);

// Change these values
const Course = require('./models/course');
const Student = require('./models/student');
const Attendance = require('./models/attendance');
const data = require('./data/data').attendanceData;


async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        data.forEach(async (entry) => {

            const student = await Student.findOne({ studentId: entry[0] });
            const course = await Course.findOne({ courseId: entry[1] });

            let obj = new Attendance({
                _id: new Mongoose.Types.ObjectId(),
                studentId: student._id,
                courseId: course._id,
                totalLectureDays: entry[2],
                noOfDaysPresent: entry[3]
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
}

run().catch(error => console.error(error.stack));