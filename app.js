const Mongoose = require('mongoose');
const fs = require('fs');

const connectionString = require('./db');

// Models
const {
    Movies
} = require('./models/sample_mflix.js');

// Data
const {
    applicantData,
    attendanceData,
    branchData,
    courseAllocationData,
    courseData,
    departmentData,
    hostelData,
    instructorData,
    registrationData,
    studentData,
} = require('./data');

// const data = [];
// courseData.forEach((item) => {
//     data.push({
//         courseId: item[0],
//         courseName: item[1],
//         semester: item[2],
//         branch: item[3],
//         elective: item[4],
//         projectMarks: item[5],
//         assignmentMarks: item[6],
//         internalMarks: item[7],
//         semesterExamMarks: item[8],
//     });
// })

// fs.writeFile('./data/course.json', JSON.stringify(data,null, 2), () => {console.log('success')});

async function run() {
    Mongoose.connect(connectionString, { useNewUrlParser: true }, async (err) => {
        if (err) throw err;
        console.log('Successfully connected');
        try {
            // const result = await Movies.aggregate([
            //     { $match: { year: { $gte: 2000}}},
            //     { $group: {
            //         _id: '$year',
            //         count: { $sum: 1 }
            //     }}
            // ]);
            // result.sort((a, b) => b.count - a.count);
            const result = await Movies.find({ imdb: { rating: 7.1 }}).select('year title');
            console.log(result.length);
        } catch (error) {
            console.log(error);
        } finally {
            Mongoose.connection.close();
        }
    });
}



run().catch(error => console.error(error.stack));