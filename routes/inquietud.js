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

router.post('/nuevaInquietud',(req,res)=>{

const {duda} = req.body;
let inquietud = [duda];

let nuevaInquietud = `INSERT INTO inquietud(duda)
                  VALUES(?)`;
mysqlConnection.query(nuevaInquietud, inquietud, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Inquietud añadida`, })
  });
});  



module.exports = router;