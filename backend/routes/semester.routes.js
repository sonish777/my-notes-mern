const express = require("express");
const sememsterController = require("../controllers/sememster.controller");

const router = express.Router();

router
  .route("/")
  .post(sememsterController.createSemesterDir)
  .get(sememsterController.getSemesters);

module.exports = router;
