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

router.post('/nuevoTrabajo',(req,res)=>{

const {archivo} = req.body;
let trabajo = [archivo];

let nuevoTrabajo = `INSERT INTO trabajo(archivo)
                  VALUES(?)`;
mysqlConnection.query(nuevoTrabajo, trabajo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Trabajo entregado`, })
  });
});  





module.exports = router;