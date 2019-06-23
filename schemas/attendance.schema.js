const Schema = require('mongoose').Schema;

const attendanceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    studentId: {type: Schema.Types.ObjectId, ref: 'Student'},
    courseId: {type: Schema.Types.ObjectId, ref: 'Course'},
    totalLectureDays : {
        type: Number,
        validate: {
            validator: (v) => v > 0
        }
    },
    noOfDaysPresent : {
        type: Number,
        validate: {
            validator: (v) => v >= 0
        }
    },
});

module.exports = attendanceSchema;

