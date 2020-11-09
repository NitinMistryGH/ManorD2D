const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

const { getAllStreets, createStreet } = require("../db/streetsDb");
const { ensureAuthenticated } = require('../config/auth');
const Street = require('../models/streetsModel');

/**
 * @route GET
 * @desc Get all Streets
 * @access Public
 */
router.get("/all", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(await getAllStreets())
});

/**
 * @route POST
 * @desc Add a Street
 * @access Public
 */
router.post("/",
    [
        body('postcode').isPostalCode('GB').withMessage('Invalid Value: must be UK Postcode'),
        body('streetName').isAlpha('en-GB').withMessage('Invalid Value: Must only contain letters'),
        body('lastVisited').isISO8601().withMessage('Invalid Value: Incorrect date format') || body('lastVisited').isDate().withMessage('Invalid Value: Incorrect date format')
    ],
    ensureAuthenticated,
    async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        createStreet(new Street({
            postcode: req.body.postcode,
            streetName: req.body.streetName,
            lastVisited: req.body.lastVisited
        })).then(street => res.status(201).json(street))
            .catch(err => res.status(422).json(err));
    })

module.exports = router;