/*
 * Servidor de Crowfunding, Mediante el uso de
 * middleware y express (router). Las operaciones
 * realizadas daran resultados simulados dependiendo de
 * la operacion solicitada, dentro de algunas operaciones
 * del CRUD estaran comentadas versiones que afectan
 * memoria temporal.
 */

const cors = require('cors');
const express = require('express');
const proyectosRouter = require('./routes/proyectos');
const donadoresRouter = require('./routes/donadores');
const donatariosRouter = require('./routes/donatarios');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/proyectos', proyectosRouter);
app.use('/donadores', donadoresRouter);
app.use('/donatarios', donatariosRouter);

app.listen(port, () => {
    console.log('Servidor en escucha en el puerto:', port);
}).on('error', err => {
    console.log('test');
});