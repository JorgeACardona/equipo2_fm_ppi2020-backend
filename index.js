const express = require('express');
const app = express();
const routes = require('.routes/routes');
const estudiante = require('./routes/estudiante');
const materia = require('./routes/materia');
const docentes = require('./routes/docentes');
const calificaciones = require('./routes/calificaciones');
const inquietud = require('./routes/inquietud');
const trabajo = require('./routes/trabajo');


// Ajustes
app.set('port', 3000);

// Middlewares
app.use(express.json());



// Routes//
app.usea('/api',routes)
app.use('/api/estidiante',estudiante);
app.use('/api/docentes',docentes);
app.use('/api/materia',materia);
app.use('/api/calificaciones',calificaciones);
app.use('/api/inquietud',inquietud);
app.use('/api/trabajo',trabajo);

// Ajustes del servidor
app.listen(3000, () => {
  console.log(`running server port 3000`);
});