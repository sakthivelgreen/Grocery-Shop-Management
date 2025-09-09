const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true
    },
    supplierPhone: {
        type: String,
        required: false,
        default: "-"
    },
    supplierAddress: {
        type: String,
        required: false,
        default: "-"
    }
}, { timestamps: true });

const Supplier = new mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
