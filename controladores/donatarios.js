// Controlador del modelo de donatarios
// hace uso de llamadas asincronas para asegurar
// la respuesta. Codigo Autodescriptivo.
const donatarios = require('../modelos/donatarios');

const getAll = async function (req,res) {
    let p = donatarios.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res) {
    await res.json(donatarios.findByRfc(req));
}

const add = async function (req,res) {
    await res.json(donatarios.add(req.body));
}

const put = async function (req,res) {
    await res.json(donatarios.put(req));
}

const patch = async function (req,res) {
    await res.json(donatarios.patch(req));
}

const deleteAll = async function (req,res) {
    await res.json(donatarios.deleteAll(req));
}

const deleteByRfc = async function (req,res) {
    await res.json(donatarios.deleteByRfc(req));
}

exports.getAll = getAll;
exports.getByRfc = getByRfc;
exports.add = add;
exports.put = put;
exports.patch = patch;
exports.deleteByRfc = deleteByRfc;
exports.deleteAll = deleteAll;