const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const User = require("../models/userModel");
const { findByEmail } = require('../db/userDb');

module.exports = passport => {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            // match user
            findByEmail(email)
                .then(user => {
                    if (!user) {
                        return done(null, false, { message: 'E-mail not registered to an account' });
                    }
                    // match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password is incorrect' });
                        }
                    })
                })
                .catch((err) => { console.log(err) })
        })

    )
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}; 
