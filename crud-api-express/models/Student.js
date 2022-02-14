const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  std_id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  courses: {
    type: [""],
    default: ["javaFullstack"],
    required: true,
  },
});

module.exports = model("students", StudentSchema);