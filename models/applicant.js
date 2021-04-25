const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const applicantSchema = new Schema({
    _id: Schema.Types.ObjectId,
    applicantId: {type: String, unique: true, required: true},
    applicantName: {type: String, required: true},
    emailId: {type: String, unique: true, required: true},
    address: String,
    city: String
});

const Applicant = Mongoose.model('Applicant', applicantSchema);


module.exports = Applicant;
