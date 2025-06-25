const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,  
  user: process.env.DB_USER,  
  password: process.env.DB_PASS,  
  database: process.env.DB_NAME,  
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,  // Adjust based on RDS instance type
  connectTimeout: 30000
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to AWS RDS MySQL Database!");
    connection.release();
  }
});

module.exports = pool;
