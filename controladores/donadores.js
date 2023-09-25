const donadores = require('../modelos/donadores');

const getAll = async function (req,res) {
    let p = donadores.findAll();
    await res.json(p);
}

const getByRfc = async function (req,res) {
    console.log(req);
    await res.json(donadores.findByRfc(req.params.rfc));
}

const add = async function (req,res) {
    const nuevoDonador = donadores.add(req.body);
    await res.json(nuevoDonador);
}

exports.getAll = getAll;
exports.getByRfc = getByRfc;
exports.add = add;