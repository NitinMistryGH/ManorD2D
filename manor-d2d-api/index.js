const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session')

const streets = require("./routes/streets");
const users = require("./routes/users");

require('./config/passport')(passport);

// db connection details
const dbConnection = 'mongodb://mongodb:27017/manorD2D';

const app = express();

// set up CORS
app.use(cors());

// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// read cookies (needed for auth) 
app.use(cookieParser());

//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//use flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

app.use(passport.initialize());
app.use(passport.session());

// connect to db
mongoose.connect(dbConnection,
    { useNewUrlParser: true }
).then(() => {
    console.log("Connection Successful");
}).catch(err => console.log(err));

//routes
app.use("/streets", streets);
app.use("/user", users);

// SERVER ACTIVATION
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
