const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bkj7qqvxik5lspc4qkzl-mysql.services.clever-cloud.com',
  user: 'up7tudib1xv40axp',
  password: '6k3fgc3MBEpaLU6LDDFR',
  database: 'bkj7qqvxik5lspc4qkzl',
  multipleStatements: true

   
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;