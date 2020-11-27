const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/materia", (req, res) => {
  mysqlConnection.query("SELECT * FROM materia", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post('/nueva-materia',(req,res)=>{

    const {cod_materia,grado,docente,nom_materia,tematica,id_docente} = req.body;
    let materia = [{cod_materia,grado,docente,nom_materia,tematica,id_docente}];
    
    let nuevaMateria = `INSERT INTO materia({cod_materia,grado,docente,nom_materia,tematica,id_docente)
                      VALUES(?,?,?,?,?,?,?)`;
    mysqlConnection.query(nuevaMateria, materia, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ message:`Nueva materia asignada`, })
      });
    });  



router.put("/materia/:cod_materia", (req, res) => {
  const { 
    tematica,
    id_docente } = req.body;
  const { cod_materia } = req.params;
  mysqlConnection.query(
    `UPDATE modulos SET modulos.modulo = '${tematica}',modulos.mod = '${id_docente}' WHERE id = '${cod_materia}'`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Materia actualizada" });
      } else {
        console.log(err);
      }
    }
  );
});


module.exports = router;