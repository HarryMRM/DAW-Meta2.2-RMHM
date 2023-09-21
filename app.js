const cors = require('cors');
const express = require('express');
const controladorModelos = require('./controladores/proyecto');
const controladorDonadores = require('./controladores/donadores');
const app = express();
const port = 4000;

app.use(cors())
app.use(express.json())

app.get("/productos", controladorModelos.getAll);
app.get("/productos/:id", controladorModelos.getById);
app.get("/donadores", controladorDonadores.getAll);
app.get("/donadores/:rfc", controladorDonadores.getByRfc);

app.listen(port, () => {
    console.log('Servidor en escucha en el puerto:', port);
}).on('error', err => {
    console.log('test');
});