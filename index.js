const express = require('express');
const app = express();
const routes = require('.routes/routes');
const estudiante = require('./routes/estudiante');
const materia = require('./routes/materia');
const docentes = require('./routes/docentes');
const calificaciones = require('./routes/calificaciones');
const inquietud = require('./routes/inquietud');
const trabajo = require('./routes/trabajo');
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))



// Ajustes
app.set('port',process.env.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(cors({origin: '*'}))



// Routes//
app.usea('/api',routes)
app.use('/api/estudiante',estudiante);
app.use('/api/docentes',docentes);
app.use('/api/materia',materia);
app.use('/api/calificaciones',calificaciones);
app.use('/api/inquietud',inquietud);
app.use('/api/trabajo',trabajo);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`running server port ${app.get('port')}`);
});