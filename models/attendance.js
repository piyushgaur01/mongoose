const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const attendanceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    student: {type: Schema.Types.ObjectId, ref: 'Student'},
    course: {type: Schema.Types.ObjectId, ref: 'Course'},
    totalLectureDays : {
        type: Number,
        min: 1
    },
    noOfDaysPresent : {
        type: Number,
        min: 0
    },
});

const Attendance = Mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;

