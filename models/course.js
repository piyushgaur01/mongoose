const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const courseSchema = new Schema({
    _id: Schema.Types.ObjectId,
    courseId: {type: String, required: true, unique: true},
    courseName: {type: String, required: true},
    semester: Number,
    branch: {
        type: Schema.Types.ObjectId,
        ref: 'Branch'
    },
    elective: {
        type: String,
        validate: {
            validator: (v) => /^[Y|N]$/.test(v)
        }
    },
    projectMarks: Number,
    assignmentMarks: Number,
    internalMarks: Number,
    semesterExamMarks: Number
});

const Course = Mongoose.model('Course', courseSchema);

module.exports = Course;

