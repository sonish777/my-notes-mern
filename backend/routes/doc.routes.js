const express = require("express");
const upload = require("../middlewares/upload");
const docController = require("../controllers/doc.controller");

const router = express.Router();

router
  .route("/:semSlug/:subSlug")
  .post(upload.single("doc"), docController.createDocument)
  .get(docController.getDocumentsOfSub);

router.route("/:docId").get(docController.viewDocument);

module.exports = router;
