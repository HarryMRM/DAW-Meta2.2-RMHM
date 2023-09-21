const productos = [
    {
        id:1,
        descripcion:"lol"
    },
    {
        id:2,
        descripcion:"XD"
    }
]
const findAll = function() {
    return productos;
}
const findById = function(id) {
    let p = productos.find(e => e.id == id);
    return p;
}
exports.findAll = findAll;
exports.findById = findById;