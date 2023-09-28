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

// Encuentra al usuario por su RFC, tambien permite
// regresar exclusivamente cierta informacion segun
// lo solicitado por URL.
const findByRfc = function(req) {
    let url = req.url.split('/');
    let p = donatarios.find(e => e.rfc == req.params.rfc);
    if (JSON.stringify(req.query) === '{}' && url[2] !== 'proyectosAsociados') {
        return p;
    } else if(url[2] === 'proyectosAsociados' && p !== undefined){ 
        return p.proyectosAsociados;
    }
}

/*
* Adicion de un dato al modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare. 
*/
const add = function(body) {
    // donatarios.push(body);
    return body;
}

/*
* Edicion de un dato del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare, necesita todos los valores para
* funcionar si o si. 
*/
const put = function(req) {
    let llaves = ["rfc","nombre","proyectosAsociados","imagen"];
    let isbodyValido = true; 
    let p = donatarios.find(e => e.rfc == req.params.rfc);
    llaves.forEach(llave => {
        if(!req.body.hasOwnProperty(llave)){
            isbodyValido = false;
        }
    });
    if(isbodyValido && p !== undefined){
        let i = donatarios.indexOf(p);
        donatarios[i] = req.body;
        return req.body;
    }
    else{
        return {};
    }
}

/*
* Edicion de un dato del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare. 
*/
const patch = function(req) {
    let llaves = ["rfc","nombre","proyectosAsociados","imagen"];
    let isbodyValido = false; 
    let p = donatarios.find(e => e.rfc == req.params.rfc);
    llaves.forEach(llave => {
        if(req.body.hasOwnProperty(llave)){
            isbodyValido = true;
        }
    });
    if(isbodyValido && p !== undefined){
        let i = donatarios.indexOf(p);
        donatarios[i] = req.body;
        return req.body;
    }
    else{
        return {};
    }
}

/*
* Borrado de todos los datos del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare, necesita todos los valores para
* funcionar si o si. 
*/
const deleteAll = function(req) {
    donatarios = [];
    return [];
}

/*
* Borrado de un dato del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare, necesita todos los valores para
* funcionar si o si. 
*/
const deleteByRfc = function(req) {
    donatarios = donatarios.filter(e => e.rfc != req.params.rfc);
    let p = donatarios.find(e => e.rfc == req.params.rfc);
    return p;
}

exports.findAll = findAll;
exports.findByRfc = findByRfc;
exports.deleteByRfc = deleteByRfc;
exports.deleteAll = deleteAll;
exports.add = add;
exports.put = put;
exports.patch = patch;