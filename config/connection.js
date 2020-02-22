var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "RaOl91559590!",
//   database: "burgers_db"
// });

var connection;

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "muowdopceqgxjn2b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "wppmqd6cxq39er4c",
      password: "z7hwuno97b7kub6r",
      database: "j4jti3obcm1stb2r"
    });
  };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
