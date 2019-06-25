const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const courseAllocationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    allocationId: {type: Number, required: true, unique: true},
    course: {type: Schema.Types.ObjectId, ref: 'Course'},
    instructor: {type: Schema.Types.ObjectId, ref: 'Instructor'},
    startDate: Date,
    endDate: Date
});

const CourseAllocation = Mongoose.model('Course Allocation', courseAllocationSchema);

module.exports = CourseAllocation;

