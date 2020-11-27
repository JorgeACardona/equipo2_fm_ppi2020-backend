const express = require('express');
const app = express()
const estudiante = require('./routes/estudiante');
const materia = require('./routes/materia');
const docentes = require('./routes/docentes');
const calificaciones = require('./routes/calificaciones');
const inquietud = require('./routes/inquietud');
const actividad = require('./routes/actividad')
const cors = require('cors')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}))



// Ajustes
app.set('port',process.env.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(cors({origin: '*'}))

app.get('/',(req,res)=>{
  res.send('hi');
});

// Routes
app.use('/api',estudiante);
app.use('/api',docentes);
app.use('/api',materia);
app.use('/api',calificaciones);
app.use('/api',inquietud);
app.use('/api',actividad)


// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`running server port ${app.get('port')}`);
});