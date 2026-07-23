const express = require("express");
const router = express.Router();

const {
    getShowTimings,
    addShowTiming
} = require("../controllers/showTimingController");

router.get("/", getShowTimings);
router.post("/", addShowTiming);

module.exports = router;