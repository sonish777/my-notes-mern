const path = require("path");
const multer = require("multer");
const Semesters = require("../models/Semesters");
const Subjects = require("../models/Subjects");

const multerStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const { semSlug, subSlug } = req.params;
    try {
      const semester = await Semesters.findOne({ slug: semSlug });
      if (!semester) {
        return cb("Could not resolve semester", null);
      }
      const subject = await Subjects.findOne({ slug: subSlug });
      if (!subject) {
        return cb("Could not resolve subject", null);
      }
      req.fileDest = path.join("pdfs", `${semester.name}/${subject.name}`);
      cb(null, req.fileDest);
    } catch (error) {}
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerStorage,
});

module.exports = upload;
