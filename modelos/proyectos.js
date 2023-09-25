const proyectos = [
    {
        id:1001,
        nombre:"Proyecto 1",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:100,
        donadores:[1,2],
        cantidad: 6000
    },
    {
        id:1002,
        nombre:"Proyecto 2",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:200,
        donadores:[1,3],
        cantidad:4000
    },
    {
        id:1003,
        nombre:"Proyecto 3",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:300,
        donadores:[2],
        cantidad:4000
    },
    {
        id:1004,
        nombre:"Proyecto 4",
        descripcion:"lol",
        imagen:"trucoteca.com",
        donatario:400,
        donadores:[3],
        cantidad:4000
    }
]
const findAll = function() {
    return proyectos;
}
const findById = function(id) {
    let p = proyectos.find(e => e.id == id);
    return p;
}
exports.findAll = findAll;
exports.findById = findById;