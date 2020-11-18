const Semesters = require("../models/Semesters");
const slugify = require("slugify");

const makeDir = require("../utils/makeDir");

module.exports.createSemesterDir = async (req, res, next) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: "fail", error: "Name is required" });
  }
  const slug = slugify(name, { lower: true });
  makeDir(name, async (status) => {
    console.log(status);
    if (status === "success") {
      const semester = await Semesters.create({ name, slug });
      return res.status(200).json({
        status: "success",
        semester,
      });
    } else {
      return res.status(400).json({
        status: "fail",
        error: "Name already used",
      });
    }
  });
};

module.exports.getSemesters = async (req, res, next) => {
  const semesters = await Semesters.find().sort("name");
  res.status(200).json({
    status: "success",
    semesters,
  });
};
