const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ROUTES
/**
 * @route GET
 * @desc Test Endpoint
 * @access Public
 */
app.get("/", (req, res) => {
    res.status(200).send("TESTING")
})

// SERVER ACTIVATION
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
