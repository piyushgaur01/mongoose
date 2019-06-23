const Schema = require('mongoose').Schema;

const departmentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    departmentId: {type: Number, required: true, unique: true},
    departmentName: {type: String, required: true},
    headOfDepartment: String
});

module.exports = departmentSchema;