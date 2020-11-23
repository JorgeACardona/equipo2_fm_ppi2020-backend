const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/trabajo', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM trabajo ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
router.post('/nuevo-trabajo',(req,res)=>{

const {cod_trabajo,grado,fecha_entrega,tematica,docente,nota} = req.body;
let trabajo = [cod_trabajo,grado,fecha_entrega,tematica,docente,nota];

let nuevoTrabajo = `INSERT INTO trabajo(cod_trabajo,grado,fecha_entrega,tematica,docente,nota)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoTrabajo, trabajo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Trabajo añadido`, })
  });
});  
router.put('/trabajo/:id', (req, res) => {
  const {fecha_entrega} = req.body;
  const { cod_trabajo } = req.params;
  mysqlConnection.query(`UPDATE trabajo SET trabajo.trabajo = '${fecha_entrega}', WHERE cod_trabajo = '${cod_trabajo}'`, 
  [cod_trabajo,grado,fecha_entrega,tematica,docente,nota], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Fecha de entrega actualizada'});
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