const sql = require("mssql");

const config = {
    user: "sa",
    password: "stella12",
    server: "localhost",
    database: "MovieBookingDB",

    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log("Database Connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { sql, connectDB };