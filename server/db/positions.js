const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const positionSchema = new Schema ({
    name: String,
    salary: Number,
})

const Position = model('Position',positionSchema);

module.exports = Position