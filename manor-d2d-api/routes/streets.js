const express = require("express");
const router = express.Router();
const getAllStreets = require("../db/streetsDb").getAllStreets;

/**
 * @route GET
 * @desc Test Endpoint
 * @access Public
 */
router.get("/", (req, res) => {
    res.status(200).send("TESTING")
});

/**
 * @route GET
 * @desc Get all Streets
 * @access Public
 */
router.get("/all", async (req, res) => {
    res.status(200).send(await getAllStreets())
});

module.exports = router;