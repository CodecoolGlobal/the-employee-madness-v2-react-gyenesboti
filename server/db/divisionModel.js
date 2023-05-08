const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const divisionSchema = new Schema ({
    name: String,
    boss: { type: Schema.Types.ObjectId, ref: "Employee"},
    budget: Number,
    location: {
        country: String,
        city: String
    }
})

const Division = model("Division", divisionSchema);
module.exports = Division