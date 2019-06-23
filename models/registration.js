const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;


const registrationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    studentId: { type: Schema.Types.ObjectId, ref: 'Student'},
    courseId: { type: Schema.Types.ObjectId, ref: 'Course'},
    dateOfExam: Date,
    projectMarks: Number,
    assignmentMarks: Number,
    internalMarks: Number,
    semesterMarks: Number,
    grade: String
});

const Registration = Mongoose.model('Registration', registrationSchema);

module.exports = Registration;