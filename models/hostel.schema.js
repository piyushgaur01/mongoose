const Schema = require('mongoose').Schema;

const hostelSchema = new Schema({
    _id: Schema.Types.ObjectId,
    hostelId: {type: String, required: true, unique: true},
    roomNo: {type: Number, required: true, unique: true},
    studentId: {type: Schema.Types.ObjectId, ref: 'Student'},
    hostelFee : {
        type: Number,
        min: 1
    }
});

module.exports = hostelSchema;

