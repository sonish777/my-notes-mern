const fs = require("fs");
const path = require("path");

module.exports = (name, cb) => {
  fs.mkdir(path.join("pdfs", name), (err) => {
    if (err) {
      console.log(err);
      return cb("fail");
    }
    cb("success");
  });
};
