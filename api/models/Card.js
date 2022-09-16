const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
    {
        number: { type: String, required: true, unique: true, maxlength: 16 },
        expDate: { type: Date, required: true },
        cardHolder: { type: String, required: true, maxlength: 20 },
        cvv: { type: String, required: true, maxlength: 3 },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Card', CardSchema);
