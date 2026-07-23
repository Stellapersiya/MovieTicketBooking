const { sql } = require("../config/db");

// Get All Movies
const getMovies = async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM Movies");
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Add Movie
const addMovie = async (req, res) => {
    try {

        const { MovieName, Language, Genre, Duration, ReleaseDate } = req.body;

        await sql.query`
            INSERT INTO Movies
            (MovieName, Language, Genre, Duration, ReleaseDate)
            VALUES
            (${MovieName}, ${Language}, ${Genre}, ${Duration}, ${ReleaseDate})
        `;

        res.send("Movie Added Successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update Movie
const updateMovie = async (req, res) => {
    try {

        const { id } = req.params;
        const { MovieName, Language, Genre, Duration, ReleaseDate } = req.body;

        await sql.query`
            UPDATE Movies
            SET
                MovieName = ${MovieName},
                Language = ${Language},
                Genre = ${Genre},
                Duration = ${Duration},
                ReleaseDate = ${ReleaseDate}
            WHERE MovieID = ${id}
        `;

        res.send("Movie Updated Successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getMovies,
    addMovie,
    updateMovie
};
// Delete Movie
const deleteMovie = async (req, res) => {
    try {

        const { id } = req.params;

        await sql.query`
            DELETE FROM Movies
            WHERE MovieID = ${id}
        `;

        res.send("Movie Deleted Successfully");

    } catch (err) {
        res.status(500).send(err.message);
    }
};
module.exports = {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie
};