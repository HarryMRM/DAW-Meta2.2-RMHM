const productos = require('../modelos/proyecto');

const getAll = async function (req,res) {
    let p = productos.findAll();
    await res.json(p);
}

const getById = async function (req,res) {
    await res.json(productos.findById(req.params.id));
}

exports.getAll = getAll;
exports.getById = getById;