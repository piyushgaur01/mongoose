const Schema = require('mongoose').Schema;

const studentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    studentId: {type: String, required: true, unique: true},
    applicantId: {type: Schema.Types.ObjectId, ref: 'Applicant'},
    currentSemester: Number,
    userId: {type: String, unique: true},
    password: {type: String, required: true}
});

module.exports = studentSchema;