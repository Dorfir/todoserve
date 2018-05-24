/* Service de connexion à la base de données mysql */

/* Instance du driver de connexion mySql */
var mysql = require('mysql');

/* Instance de connexion à la base de données 'todobase' */
var connexion = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'todobase'
});

module.exports = connexion;
