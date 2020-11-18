const express = require("express");
const directoryController = require("../controllers/directory.controller");

const router = express.Router();

router
  .route("/")
  .post(directoryController.createDirectory)
  .get(directoryController.getDirectoryItems);

module.exports = router;
