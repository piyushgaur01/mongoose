const Schema = require('mongoose').Schema;

const applicantSchema = new Schema({
    _id: Schema.Types.ObjectId,
    applicantId: {type: String, unique: true, required: true},
    applicantName: {type: String, required: true},
    emailId: {type: String, unique: true, required: true},
    address: String,
    City: String
});

module.exports = applicantSchema;
