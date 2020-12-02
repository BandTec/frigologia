var configuracoes = {
    server: "dbgrupo08.database.windows.net",
    user: "frigologia",
    password: "#Gfgrupo8",
    database: "bd-Grupo08",
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
    pool: {
      max: 4,
      min: 1,
      idleTimeoutMillis: 90000,
      connectionTimeout: 5000,
    },
};

var sql = require("mssql");
sql.on("error", (err) => {
  console.error(`Erro de Conexão: ${err}`);
});

function conectar() {
  sql.close();
  return sql.connect(configuracoes);
}

module.exports = {
  conectar: conectar,
  sql: sql,
};
