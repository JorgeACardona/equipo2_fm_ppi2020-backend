const express = require('express');
const app = express();
const estudiante = require('./routes/estudiante');
const materia = require('./routes/materia');
const docentes = require('./routes/docentes');
const calificaciones = require('./routes/calificaciones');
const inquietud = require('./routes/inquietud');
const trabajo = require('./routes/trabajo');

// Ajustes
app.set('port',3001);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',estudiante);
app.use('/api',docentes);
app.use('/api',materia);
app.use('/api',calificaciones);
app.use('/api',inquietud);
app.use('/api',trabajo);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});