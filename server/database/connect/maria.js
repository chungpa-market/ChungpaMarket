const maria = require('mysql');
const db = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mariadb',
  database: 'dev',
};
const conn = maria.createConnection(db);

module.exports.db = db;
module.exports.conn = conn;
