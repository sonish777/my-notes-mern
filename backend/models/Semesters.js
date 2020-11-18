const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Semesters = mongoose.model("Semester", semesterSchema);
module.exports = Semesters;
