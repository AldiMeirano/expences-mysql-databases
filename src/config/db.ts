import mysql from "mysql2";

export default mysql.createPool({ 
    host:"localhost",
    user: "root",
    password: "Sayurnangka321",
    database: "expenses_databases"
})