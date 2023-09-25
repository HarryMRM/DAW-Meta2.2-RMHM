const donadores = [
    {
        rfc:1,
        nombre:"John Doe",
        proyectosAsociados: ["Proyecto 1","Proyecto 2"],
        imagen:"trucoteca.com",
        cantidadTotalDonada:2000
    },
    {
        rfc:2,
        nombre:"Lillie Alola",
        proyectosAsociados: ["Proyecto 1","Proyecto 3"],
        imagen:"trucoteca.com",
        cantidadTotalDonada:100000
    },
    {
        rfc:3,
        nombre:"Annette Fantine Dominic",
        proyectosAsociados: ["Proyecto 2","Proyecto 4"],
        imagen:"trucoteca.com",
        cantidadTotalDonada:5000
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