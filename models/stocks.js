const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitType: {
        type: String,
        required: true
    },
    subQuantity: {
        type: Number,
        required: false
    },
    subQuantityUnitType: {
        type: String,
        required: false
    },
    latestMRP: {
        type: Number,
        required: true,
    },
    rate: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date,
        required: false
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        required: false,
        default: '-'
    }

}, { timestamps: true });

const Stock = new mongoose.model('Stock', stockSchema);
module.exports = Stock;