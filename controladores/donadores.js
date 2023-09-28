// Controlador del modelo de donadores
// hace uso de llamadas asincronas para asegurar
// la respuesta. Codigo Autodescriptivo.

const donadores = require('../modelos/donadores');

const getAll = async function (req,res) {
    let p = donadores.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res) {
    await res.json(donadores.findByRfc(req));
}

const add = async function (req,res) {
    await res.json(donadores.add(req.body));
}

const put = async function (req,res) {
    await res.json(donadores.put(req));
}

const patch = async function (req,res) {
    await res.json(donadores.patch(req));
}

const deleteAll = async function (req,res) {
    await res.json(donadores.deleteAll(req));
}

const deleteByRfc = async function (req,res) {
    await res.json(donadores.deleteByRfc(req));
}

exports.getAll = getAll;
exports.getByRfc = getByRfc;
exports.add = add;
exports.put = put;
exports.patch = patch;
exports.deleteByRfc = deleteByRfc;
exports.deleteAll = deleteAll;