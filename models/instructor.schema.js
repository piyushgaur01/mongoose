const Schema = require('mongoose').Schema;

const instructorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    instructorId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => /^I\d{3}$/.test(v)
        }
    },
    instructorName: { type: String, required: true },
    dateOfJoining: Date,
    departmentId: Number
});

module.exports = instructorSchema;