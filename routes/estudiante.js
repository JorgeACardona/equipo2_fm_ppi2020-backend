const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

router.get('/estudiantes', (req, res) => {

  mysqlConnection.query('SELECT * FROM estudiante ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post('/nuevoEstudiante/', (req, res) => {

  const { nombre, apellido, grado, acudiente, correo, contraseña, edad } = req.body;
  let alumno = [nombre, apellido, grado, acudiente, correo, contraseña, edad];

  let nuevoAlumno = `INSERT INTO estudiante(nombre,apellido,grado,acudiente,correo,contraseña,edad)
                  VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Alumno matriculado`, })
    
  });
});

router.put('/estudiante/:id_estudiante', (req, res) => {
  const { contraseña } = req.body;
  const { nombre } = req.params;
  mysqlConnection.query(`UPDATE estudiante SET contraseña = '${contraseña}'
   WHERE nombre = '${nombre}'`,(err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Contraseña actualizada' });
      } else {
        console.log(err);
      }
    });
});

// router.delete('/estudiante/:id', (req, res) => {
//   const { id } = req.params;
//   mysqlConnection.query('DELETE FROM estudiante WHERE id = ?',
//    [id], (err, rows, fields) => {
//     if(!err) {
//       res.json({status: 'Estudiante eliminado'});
//     } else {
//       console.log(err);
//     }
//   });
// });

module.exports = router;