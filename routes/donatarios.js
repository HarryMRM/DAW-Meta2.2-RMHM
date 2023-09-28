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

function verificarResult(req,res,next){
    if (JSON.stringify(res.body) === '{}'){
        res.status(400);
        res.send("Error: Solicitud mal hecha")
    }
    else{
        next();
    }
}

const express = require('express');
const router = express.Router();
const donatariosController = require('../controladores/donatarios');

router.get("/", donatariosController.getAll);
router.get("/:rfc", donatariosController.getByRfc);
router.get("/:rfc/proyectosAsociados", donatariosController.getByRfc);

router.post("/", verificarRequest, donatariosController.add);

router.put("/:rfc", verificarRequest, donatariosController.put, verificarResult);
router.patch("/:rfc", verificarRequest, donatariosController.patch);

router.delete("/", donatariosController.deleteAll);
router.delete("/:rfc", donatariosController.deleteByRfc);
module.exports = router;