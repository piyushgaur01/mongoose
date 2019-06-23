const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const studentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    studentId: {type: String, required: true, unique: true},
    applicantId: {type: Schema.Types.ObjectId, ref: 'Applicant'},
    currentSemester: Number,
    userId: {type: String, unique: true},
    password: {type: String, required: true}
});

const Student = Mongoose.model('Student', studentSchema);

module.exports = Student;