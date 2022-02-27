const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "men", required: true }
},
    {
        timestamps: true,
        versionKey: false

    });

module.exports = mongoose.model("cart", cartSchema);