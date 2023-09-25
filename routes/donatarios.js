const express = require('express');
const router = express.Router();
const donatariosController = require('../controladores/donatarios');
router.get("/", donatariosController.getAll);
router.get("/:rfc", donatariosController.getByRfc);
router.post("/", donatariosController.add);
module.exports = router;