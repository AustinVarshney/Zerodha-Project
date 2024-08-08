const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;