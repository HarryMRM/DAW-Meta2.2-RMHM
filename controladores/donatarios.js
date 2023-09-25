const donatarios = require('../modelos/donatarios');

const getAll = async function (req,res) {
    let p = donatarios.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res) {
    await res.json(donatarios.findByRfc(req.params.rfc));
}

const add = async function (req,res) {
    const nuevoDonador = donatarios.add(req.body);
    await res.json(nuevoDonador);
}

exports.getAll = getAll;
exports.getByRfc = getByRfc;
exports.add = add;