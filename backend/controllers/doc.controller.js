const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const Docs = require("../models/Docs");

module.exports.createDocument = async (req, res, next) => {
  try {
    const doc = await Docs.create({
      name: req.file.originalname,
      dest: req.fileDest,
      path: req.file.path,
      semester: req.params.semSlug,
      subject: req.params.subSlug,
    });
    res.status(201).json({
      status: "success",
      doc,
    });
  } catch (error) {
    console.log(error);
    res.status(201).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports.getDocumentsOfSub = async (req, res, next) => {
  const { semSlug, subSlug } = req.params;
  try {
    const docs = await Docs.find({ semester: semSlug, subject: subSlug });
    res.status(200).json({
      status: "success",
      docs,
    });
  } catch (error) {}
};

module.exports.viewDocument = async (req, res, next) => {
  const { docId } = req.params;
  const doc = await Docs.findById(docId);
  const file = fs.createReadStream(doc.path);
  const contentType = mime.contentType(path.extname(doc.name));

  res.setHeader("Content-Type", contentType);
  res.setHeader("Content-Disposition", `attachement; filename=${doc.name}`);
  file.pipe(res);
};
