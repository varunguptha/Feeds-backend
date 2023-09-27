const mongoose = require("mongoose");


const stockSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please add name"],
        trim: true,
    },
    quantity: {
        type: String,
        required: [true, "Please add quantity"],
        trim: true,
    },
    price: {
        type: String,
        required: [true, "Please add price"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please add a description"],
        trim: true,
    },
    value: {
        type: String,
        trim: true,
    },

},
    {
        timestamps: true,
    }
)

const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
