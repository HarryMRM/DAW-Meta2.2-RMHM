const donadores = [
    {
        rfc:1,
        nombre:"lol",
        proyectoAs: "tacos.com",
        imagen:"trucoteca.com"
    },
    {
        rfc:2,
        nombre:"XD",
        proyectoAs: "tacos.com",
        imagen:"trucoteca.com"
    }
]
const findAll = function() {
    return donadores;
}
const findByRfc = function(rfc) {
    let p = donadores.find(e => e.rfc == rfc);
    return p;
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;