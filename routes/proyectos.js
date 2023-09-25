const express = require('express');
const router = express.Router();
const proyectosController = require('../controladores/proyectos');
router.get("/", proyectosController.getAll);
router.get("/:id", proyectosController.getById);
module.exports = router;