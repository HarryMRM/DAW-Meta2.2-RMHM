const express = require('express');
const router = express.Router();
const donadoresController = require('../controladores/donadores');
router.get("/", donadoresController.getAll);
router.get("/:rfc", donadoresController.getByRfc);
router.get("/:rfc/fields", donadoresController.getAll);
router.post("/", donadoresController.add);
module.exports = router;