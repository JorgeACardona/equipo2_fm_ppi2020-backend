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

router.get('/estudiantes/:id_estudiante', (req, res) => {
     const { id_estudiante } = req.params;
  mysqlConnection.query('SELECT * FROM estudiante WHERE id_estudiante = ?',[id_estudiante], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
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
  const { nombre, apellido, grado, acudiente, correo, contraseña, edad } = req.body;
  const { id_estudiante } = req.params;
  mysqlConnection.query(`UPDATE estudiante SET nombre = ?, apellido = ?, acudiente = ?, correo = ?, contraseña = ?,
  edad = ? WHERE id_estudiante = ?`,
    [nombre, apellido, grado, acudiente, correo, contraseña, edad, id_estudiante], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Contraseña actualizada' });
      } else {
        console.log(err);
      }
    });
});


module.exports = router;