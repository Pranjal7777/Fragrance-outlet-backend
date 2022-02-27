const mongoose = require("mongoose")

const womenSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    product_name: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model("women", womenSchema)