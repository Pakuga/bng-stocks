const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    product_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});

stockSchema.statics.create = async (data) => {
    let stock = new Stock(data);
    stock.createdAt = Date.now();
    stock.updatedAt = Date.now();
    await stock.save();
    return {
        product_id:stock.product_id,
        name: stock.name,
        stock: stock.stock,
        created_date : stock.created_date
    };
};

stockSchema.statics.getAll = async () => {
    return Stock.find().select({createdAt: 0, updatedAt:0, _id:0, __v:0});
};

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;