const express = require('express');
const router = express.Router();
const { validationResult, checkSchema } = require('express-validator');
const passport = require('passport');

const { findByEmail, createUser } = require('../db/userDb');
const { encrypt } = require('../authentication/bcrypt-authentication');
const User = require('../models/userModel');

/**
 * @route POST
 * @desc Register a new user
 * @access Public
 */
router.post('/register', checkSchema({
    name: {
        in: ['body'],
        isAlpha: {
            options: 'en-GB'
        }
    },
    email: {
        in: ['body'],
        isEmail: {
            errorMessage: 'E-mail is not valid'
        },
        custom: {
            options: value => {
                return findByEmail(value).then(user => {
                    if (user) Promise.reject('E-mail already in use');
                });
            }
        }
    },
    password: {
        in: ['body'],
        isLength: {
            errorMessage: 'Password must be at least 6 characters',
            options: { min: 6 }
        }
    },
    password2: {
        in: ['body'],
        custom: {
            options: (value, { req }) => {
                if (value !== req.body.password) throw new Error('Passwords do not match');
                return true;
            }
        }
    }
}), (req, res) => {

    const errors = validationResult(req);

    const { name, email, password } = req.body;

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        encrypt(password).then(hash =>
            createUser(new User({
                name: name,
                email: email,
                password: hash,
                role: ['GENERIC']
            }))).then(user => {
                req.flash('success_msg', 'Account has been created');
                res.status(201);
            })
            .catch(err => {
                console.log(err)

                return res.status(422).json(err);
            })
    }
});

/**
 * @route POST
 * @desc User Login
 * @access Public
 */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next)
});

/**
 * @route POST
 * @desc User Logout
 * @access Public
 */
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have successfully logged out');
    res.redirect('/user/login');
})

module.exports = router;