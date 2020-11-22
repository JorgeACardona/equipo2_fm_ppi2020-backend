const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/inquietud', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM inquietud ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nueva-inquietud',(req,res)=>{

const {cod_inquietud,materia,docente,estudiante,grado,cod_trabajo} = req.body;
let inquietud = [cod_inquietud,materia,docente,estudiante,grado,cod_trabajo];

let nuevaInquietud = `INSERT INTO inquietud(cod_inquietud,materia,docente,estudiante,grado,cod_trabajo)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevaInquietud, inquietud, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Inquietud añadida`, })
  });
});  

// router.put('/inquietud/:id', (req, res) => {
//   const {contraseña} = req.body;
//   const { id_estudiante } = req.params;
//   mysqlConnection.query(`UPDATE estudiante SET estudiante.estudiante = '${contraseña}', WHERE id_estudiante = '${acudiente}' id_estudiante = '${nombre}'`, 
//   [nombre,apellido,grado,acudiente,correo,contraseña,id_estudiante], (err, rows, fields) => {
//     if(!err) {
//       res.json({status: 'Estudiante actualizado'});
//     } else {
//       console.log(err);
//     }
//   });
// });

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