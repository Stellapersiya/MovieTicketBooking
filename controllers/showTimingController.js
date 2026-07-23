const { sql } = require("../config/db");

// Get All Show Timings
const getShowTimings = async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM ShowTiming");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Add Show Timing
const addShowTiming = async (req, res) => {
    try {

        const { MovieID, TheatreID, ShowDate, ShowTime } = req.body;

        await sql.query`
            INSERT INTO ShowTiming
            (MovieID, TheatreID, ShowDate, ShowTime)
            VALUES
            (${MovieID}, ${TheatreID}, ${ShowDate}, ${ShowTime})
        `;

        res.send("Show Timing Added Successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getShowTimings,
    addShowTiming
};