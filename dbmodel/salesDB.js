const mongoose = require("mongoose");


const salesSchema = mongoose.Schema({

    name: {
        type: String,
        trim: true,
    },
    quantity: {
        type: String,
        trim: true,
    },
    price: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
},
    {
        timestamps: true,
    }
)

const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;
