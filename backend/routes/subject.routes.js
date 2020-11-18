const express = require("express");
const subjectController = require("../controllers/subject.controller");

const router = express.Router();

router
  .route("/:semSlug")
  .get(subjectController.getSubjectsInSem)
  .post(subjectController.createSubjectDir);

module.exports = router;
