const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productCode: {
        type: Number,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        default: "-",
    },
    subCategory: {
        type: String,
        default: "-",
    },
    supplier: {
        type: mongoose.Types.ObjectId,
        ref: "Supplier",
        required: false,
        default: "-"
    },
    productImage: {
        name: {
            type: String,
            required: true,
        },
        data: {
            type: Buffer,
            contentType: String
        }
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: Double,
        default: 0
    },
    totalStock: {
        type: mongoose.Types.ObjectId,
        ref: "Stock",
    }
}, { timestamps: true });

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;