const express = require("express");
const mongoose = require("mongoose");
const streets = require("./routes/streets");

const app = express();

mongoose.connect('mongodb://localhost:27017/manorD2D',
    { useNewUrlParser: true }
).then(
    () => console.log("Connection Successful")).catch(err => console.log(err) );

app.use("/streets", streets)

// SERVER ACTIVATION
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
