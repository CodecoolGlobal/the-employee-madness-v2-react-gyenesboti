const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const toolSchema = new Schema ({
    name: String,
    weight: Number,
});

const Tool = model('Tool', toolSchema);

module.exports = Tool