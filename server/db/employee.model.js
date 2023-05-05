// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  created: {
    type: Date,
    default: Date.now,
  },
  currentSalary: Number,
  desiredSalary: Number,
  startingDate: Date,
  favouriteColor: "",
});

module.exports = mongoose.model("Employee", EmployeeSchema);
