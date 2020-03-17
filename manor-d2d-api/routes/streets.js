const express = require("express");
const router = express.Router();
const {getAllStreets, populateStreetsTestData} = require("../db/streetsDb");

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

/**
 * @route GET
 * @desc Populate collection with test dataset
 * @access Public
 */
router.get("/populate", async (req, res) => {
    await populateStreetsTestData();
    res.status(200).json({message: "Populated Database"})
})

module.exports = router;