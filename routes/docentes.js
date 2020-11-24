const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/docente', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM docente ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-docente',(req,res)=>{

const {id_docente,area,nombre,apellido,grado} = req.body;
let docente = [id_docente,area,nombre,apellido,grado];

let nuevoDocente = `INSERT INTO docente(id_docente,area,nombre,apellido,grado)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoDocente, docente, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Docente agregado`, })
  });
});  

router.put('/docente/:id_docente', (req, res) => {
  const {contraseña} = req.body;
  const { id_docente } = req.params;
  mysqlConnection.query(`UPDATE docente SET docente.docente = '${contraseña}', WHERE id_docente = '${nombre}' `, 
  [id_docente,area,nombre,apellido,grado], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Docente actualizado'});
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