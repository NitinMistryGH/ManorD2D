const express = require("express");
const router = express.Router();
const {getAllStreets} = require("../db/streetsDb");

/**
 * @route GET
 * @desc Get all Streets
 * @access Public
 */
router.get("/all", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(await getAllStreets())
});

module.exports = router;