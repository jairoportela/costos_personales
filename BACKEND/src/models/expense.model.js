const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenceSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    value: { type: Number, required: true }
});

module.exports = mongoose.model("Expences", expenceSchema);
