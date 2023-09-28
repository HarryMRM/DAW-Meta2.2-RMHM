// Simula una base de datos para el modelo de donadores.
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

// Encuentra al usuario por su RFC, tambien permite
// regresar exclusivamente cierta informacion segun
// lo solicitado por URL.
const findByRfc = function(req) {
    let url = req.url.split('/');
    let p = donadores.find(e => e.rfc == req.params.rfc);
    if (JSON.stringify(req.query) === '{}' && url[2] !== 'proyectosAsociados') {
        return p;
    } else if(url[2] === 'proyectosAsociados' && p !== undefined){ 
        return p.proyectosAsociados;
    }
}

// Simula la adicion de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const add = function(body) {
    // donadores.push(body);
    return body;
}

// Simula la edicion de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const put = function(req) {
    let llaves = ["rfc","nombre","proyectosAsociados","imagen","cantidadTotalDonada"];
    let isbodyValido = true; 
    let p = donadores.find(e => e.rfc == req.params.rfc);
    llaves.forEach(llave => {
        if(!req.body.hasOwnProperty(llave)){
            isbodyValido = false;
        }
    });
    if(isbodyValido && p !== undefined){
        // let i = donadores.indexOf(p);
        // donadores[i] = req.body;
        return req.body;
    }
    else{
        return {};
    }
}

// Simula la edicion de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const patch = function(req) {
    let llaves = ["rfc","nombre","proyectosAsociados","imagen","cantidadTotalDonada"];
    let isbodyValido = false; 
    let p = donadores.find(e => e.rfc == req.params.rfc);
    llaves.forEach(llave => {
        if(req.body.hasOwnProperty(llave)){
            isbodyValido = true;
        }
    });
    if(isbodyValido && p !== undefined){
        // let i = donadores.indexOf(p);
        // donadores[i] = req.body;
        return req.body;
    }
    else{
        return {};
    }
}

// Simula el borrado de los datos del modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const deleteAll = function(req) {
    // donadores = [];
    return [];
}

// Simula el borrado de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const deleteByRfc = function(req) {
    // donadores p = donadores.filter(e => e.rfc != req.params.rfc);
    let p = donadores.find(e => e.rfc == req.params.rfc);
    return p;
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;
exports.deleteByRfc = deleteByRfc;
exports.deleteAll = deleteAll;
exports.add = add;
exports.put = put;
exports.patch = patch;