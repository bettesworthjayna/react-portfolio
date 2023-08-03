"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// [START cloud_sql_mysql_mysql_connect_unix]
const mysql = require('promise-mysql');
// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
const createUnixSocketPool = (config) => __awaiter(void 0, void 0, void 0, function* () {
    // Note: Saving credentials in environment variables is convenient, but not
    // secure - consider a more secure solution such as
    // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
    // keep secrets safe.
    return mysql.createPool(Object.assign({ user: process.env.DB_USER, password: process.env.DB_PASS, database: process.env.DB_NAME, socketPath: process.env.INSTANCE_UNIX_SOCKET }, config));
});
// [END cloud_sql_mysql_mysql_connect_unix]
module.exports = createUnixSocketPool;
