// Controlador del modelo de proyectos
// hace uso de llamadas asincronas para asegurar
// la respuesta. Codigo Autodescriptivo.
const proyectos = require('../modelos/proyectos');

const getAll = async function (req,res) {
    let p = proyectos.findAll();
    await res.json(p);
}

const getById = async function (req,res) {
    await res.json(proyectos.findById(req));
}

const add = async function (req,res) {
    await res.json(proyectos.add(req.body));
}

const put = async function (req,res) {
    await res.json(proyectos.put(req));
}

const patch = async function (req,res) {
    await res.json(proyectos.patch(req));
}

const deleteAll = async function (req,res) {
    await res.json(proyectos.deleteAll(req));
}

const deleteById = async function (req,res) {
    await res.json(proyectos.deleteById(req));
}

exports.getAll = getAll;
exports.getById = getById;
exports.add = add;
exports.put = put;
exports.patch = patch;
exports.deleteAll = deleteAll;
exports.deleteById = deleteById;