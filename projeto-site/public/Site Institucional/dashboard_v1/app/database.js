var mysql = require('mysql');
var connection = mysql.createConnection({
    server: "dbgrupo08.database.windows.net",
    user: "frigologia",
    password: "#Gfgrupo8",
    database: "bd-Grupo08",
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;