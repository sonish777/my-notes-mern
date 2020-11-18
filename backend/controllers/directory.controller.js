const fs = require("fs");
const path = require("path");

module.exports.createDirectory = (req, res, next) => {
  const { dirName } = req.body;
  fs.mkdir(path.join("pdfs", dirName), (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "fail",
        error: err.message,
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Created",
    });
  });
};

module.exports.getDirectoryItems = (req, res, next) => {
  let fullPath = "pdfs";
  if (req.query.path) path.join(fullPath, req.query.path);
  fs.readdir(fullPath, (err, files) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: "fail",
        error: err.message,
      });
    }
    console.log(files);
    return res.status(200).json({
      status: "success",
      items: files,
    });
  });
};
