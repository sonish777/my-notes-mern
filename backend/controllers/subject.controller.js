const path = require("path");
const Subjects = require("../models/Subjects");
const slugify = require("slugify");

const makeDir = require("../utils/makeDir");
const Semesters = require("../models/Semesters");

module.exports.createSubjectDir = async (req, res, next) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ status: "fail", error: "Name is required" });
  }
  const semester = await Semesters.findOne({ slug: req.params.semSlug });
  if (!semester) {
    return res
      .status(404)
      .json({ status: "fail", error: "Could not resolve semester" });
  }

  const slug = slugify(name, { lower: true });
  const fullPath = path.join(semester.name, name);

  makeDir(fullPath, async (status) => {
    if (status === "success") {
      const subject = await Subjects.create({
        name,
        slug,
        path: fullPath,
        semester: semester.slug,
      });
      return res.status(200).json({
        status: "success",
        subject,
      });
    } else {
      return res.status(400).json({
        status: "fail",
        error: "Name already used",
      });
    }
  });
};

module.exports.getSubjectsInSem = async (req, res, next) => {
  const subjects = await Subjects.find({
    semester: req.params.semSlug,
  }).sort("name");
  res.status(200).json({
    status: "success",
    subjects,
  });
};
