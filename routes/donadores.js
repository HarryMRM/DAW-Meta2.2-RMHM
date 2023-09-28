// Permite revisar la integridad de la request
// para reducir posibles errores.
function verificarRequest(req,res,next){
    if (JSON.stringify(req.body) === '{}'){
        res.status(400);
        res.send("Error: Solicitud mal hecha")
    }
    else{
        next();
    }
}

// Archivo Router para donadores, todo el codigo es
// autodescriptivo.
const express = require('express');
const router = express.Router();
const donadoresController = require('../controladores/donadores');

router.get("/", donadoresController.getAll);
router.get("/:rfc", donadoresController.getByRfc);
router.get("/:rfc/proyectosAsociados", donadoresController.getByRfc);

router.post("/", verificarRequest, donadoresController.add);

router.put("/:rfc", verificarRequest, donadoresController.put);
router.patch("/:rfc", verificarRequest, donadoresController.patch);

router.delete("/", donadoresController.deleteAll);
router.delete("/:rfc", donadoresController.deleteByRfc);
module.exports = router;