const proyectos = [
    {
        id:1001,
        nombre:"Proyecto 1",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:"Miguel Gregorio Antonio Ignacio Hidalgo y Costilla Gallaga Mandarte y Villaseñor",
        donadores:["John Doe","Lillie Alola"],
        cantidad: 6000
    },
    {
        id:1002,
        nombre:"Proyecto 2",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:"Hatsune Miku",
        donadores:["John Doe","Annette Fantine Dominic"],
        cantidad:4000
    },
    {
        id:1003,
        nombre:"Proyecto 3",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:"Carlos Salinas",
        donadores:["Lillie Alola"],
        cantidad:4000
    },
    {
        id:1004,
        nombre:"Proyecto 4",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:"Elon Musk",
        donadores:["Annette Fantine Dominic"],
        cantidad:4000
    }
]
const findAll = function() {
    return proyectos;
}

// Encuentra al proyecto por su Id, tambien permite
// regresar exclusivamente cierta informacion segun
// lo solicitado por URL.
const findById = function(req) {
    let url = req.url.split('/');
    let p = proyectos.find(e => e.id == req.params.id);
    if (JSON.stringify(req.query) === '{}' && url[2] !== 'donadores' && url[2] !== 'donatario') {
        return p;
    } else if(url[2] === 'donadores' && p !== undefined){ 
        return p.donadores;
    }
    else if(url[2] === 'donatario' && p !== undefined){ 
        return p.donatario;
    }
}

// Simula la adicion de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const add = function(body) {
    // proyectos.push(body);
    return body;
}

// Simula la edicion de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const put = function(req) {
    let llaves = ["id","nombre","descripcion","imagen","donatario","donadores","cantidad"];
    let isbodyValido = true; 
    let p = proyectos.find(e => e.id == req.params.id);
    llaves.forEach(llave => {
        if(!req.body.hasOwnProperty(llave)){
            isbodyValido = false;
        }
    });
    if(isbodyValido && p !== undefined){
        // let i = proyectos.indexOf(p);
        // proyectos[i] = req.body;
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
    let llaves = ["id","nombre","descripcion","imagen","donatario","donadores","cantidad"];
    let isbodyValido = false; 
    let p = proyectos.find(e => e.id == req.params.id);
    llaves.forEach(llave => {
        if(req.body.hasOwnProperty(llave)){
            isbodyValido = true;
        }
    });
    if(isbodyValido && p !== undefined){
        // let i = proyectos.indexOf(p);
        // proyectos[i] = req.body;
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
    // proyectos = [];
    return [];
}

// Simula el borrado de un dato al modelo, esta comentada
// una linea de codigo que afecta la memoria temporal, pero
// para fines de simulacion solo se regresara lo solicitado.
const deleteById = function(req) {
    // proyectos p = proyectos.filter(e => e.id != req.params.id);
    let p = proyectos.find(e => e.id == req.params.id);
    return p;
}



exports.findAll = findAll;
exports.findById = findById;
exports.deleteAll = deleteAll;
exports.deleteById = deleteById;
exports.add = add;
exports.put = put;
exports.patch = patch;