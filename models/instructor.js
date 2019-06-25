const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

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
    department: {type: Schema.Types.ObjectId, ref: 'Department'},
});

const Instructor = Mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;