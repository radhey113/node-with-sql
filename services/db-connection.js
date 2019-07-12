
`use strict`;

const mysql = require('mysql');
const connection = {};

/**
 * Connect mysql database
 * @returns {Promise<void>}
 */
connection.connectDb = async () => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'dummy'
        });

        connection.connect();
        resolve(connection);
    })
};

module.exports = connection;

