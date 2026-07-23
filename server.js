const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const showTimingRoutes = require("./routes/showTimingRoutes");



const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/movies", movieRoutes);
app.use("/theatres", theatreRoutes);
app.use("/showtimings", showTimingRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});