const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const branchSchema = new Schema({
    _id: Schema.Types.ObjectId,
    branchId: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => /^B\d{1,3}$/.test(v)
        }
    },
    branchName: { type: String, required: true }
});

const Branch = Mongoose.model('Branch', branchSchema);

module.exports = Branch;