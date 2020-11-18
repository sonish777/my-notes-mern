const mongoose = require("mongoose");

const docSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dest: { type: String, required: true },
    path: { type: String, required: true },
    semester: { type: String, required: true },
    subject: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Docs = mongoose.model("Doc", docSchema);
module.exports = Docs;
