const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    path: { type: String, required: true },
    semester: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Subjects = mongoose.model("Subject", subjectSchema);
module.exports = Subjects;
