const { sql } = require("../config/db");

const getTheatres = async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM Theatre");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getTheatres };