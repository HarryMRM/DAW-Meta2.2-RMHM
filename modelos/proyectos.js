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

/*
* Adicion de un dato al modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare. 
*/
const add = function(body) {
    proyectos.push(body);
    return body;
}

/*
* Edicion de un dato del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare, necesita todos los valores para
* funcionar si o si. 
*/
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
        let i = proyectos.indexOf(p);
        proyectos[i] = req.body;
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
    let llaves = ["id","nombre","descripcion","imagen","donatario","donadores","cantidad"];
    let isbodyValido = false; 
    let p = proyectos.find(e => e.id == req.params.id);
    llaves.forEach(llave => {
        if(req.body.hasOwnProperty(llave)){
            isbodyValido = true;
        }
    });
    if(isbodyValido && p !== undefined){
        let i = proyectos.indexOf(p);
        proyectos[i] = req.body;
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
    proyectos = [];
    return [];
}

/*
* Borrado de un dato del modelo, cambia el
* arreglo internamente y se consevara hasta que
* el server se pare, necesita todos los valores para
* funcionar si o si. 
*/
const deleteById = function(req) {
    proyectos = proyectos.filter(e => e.id != req.params.id);
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