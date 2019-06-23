const Schema = require('mongoose').Schema;

const branchSchema = new Schema({
    _id: Schema.Types.ObjectId,
    branchId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => /^B\d{3}$/.test(v)
        }
    },
    banchName: { type: String, required: true }
});

module.exports = branchSchema;