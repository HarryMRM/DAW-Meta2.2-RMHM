const donatarios = [
    {
        rfc:100,
        nombre:"Miguel Gregorio Antonio Ignacio Hidalgo y Costilla Gallaga Mandarte y Villaseñor",
        proyectosAsociados: "Proyecto 1",
        imagen:"trucoteca.com",
    },
    {
        rfc:200,
        nombre:"Hatsune Miku",
        proyectosAsociados: "Proyecto 2",
        imagen:"trucoteca.com",
    },
    {
        rfc:300,
        nombre:"Carlos Salinas",
        proyectoAsociado: "Proyecto 3",
        imagen:"trucoteca.com",
    },
    {
        rfc:400,
        nombre:"Elon Musk",
        proyectoAsociado: "Proyecto 4",
        imagen:"trucoteca.com",
    }
]
const findAll = function() {
    return donatarios;
}
const findByRfc = function(rfc) {
    let p = donatarios.find(e => e.rfc == rfc);
    return p;
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;