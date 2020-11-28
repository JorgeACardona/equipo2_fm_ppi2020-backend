const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/calificaciones', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM calificaciones ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  
  router.get('/calificaciones/:id_calificacion', (req, res) => {
    const { id_calificacion } = req.params;
 mysqlConnection.query('SELECT * FROM calificaciones WHERE id_calificacion = ?',[id_calificacion], (err, rows, fields) => {
     if (!err) {
       res.json(rows[0]);
     } else {
       console.log(err);
     }
   });
 });

// router.post('/nueva-calificacion',(req,res)=>{

// const {,materia,periodo,notas} = req.body;
// let calificacion = [id_calificacion,materia,periodo,notas];

// let nuevaCalificacion = `INSERT INTO calificaciones(id_calificacion,materia,periodo,notas)
//                   VALUES(?,?,?,?,?,?,?)`;
// mysqlConnection.query(nuevaCalificacion, calificacion, (err, results, fields) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   res.json({ message:`calificacion agregada`, })
//   });
// });  

// router.put('/calificacion/:id_calificacion', (req, res) => {
//   const {notas} = req.body;
//   const {id_calificacion } = req.params;
//   mysqlConnection.query(`UPDATE calificaciones SET calificaciones.calificaciones = '${notas}', WHERE id_calificacion = '${id_calificacion}' `, 
//   [id_calificacion,materia,periodo,notas], (err, rows, fields) => {
//     if(!err) {
//       res.json({status: 'Calificacion actualizada'});
//     } else {
//       console.log(err);
//     }
//   });
// });


module.exports = router;