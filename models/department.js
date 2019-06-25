const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const departmentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    departmentId: {type: Number, required: true, unique: true},
    departmentName: {type: String, required: true},
    headOfDepartment: String
});

const Department = Mongoose.model('Department', departmentSchema);

module.exports = Department;