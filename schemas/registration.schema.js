const Schema = require('mongoose').Schema;

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

module.exports = registrationSchema;