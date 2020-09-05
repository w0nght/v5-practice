/** a basic API endpoint that returns a secrey code 
 * if user performs a GET request with a valid JWT 
 * in the request header */
const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/', function(req, res, next) {
//     res.render('index.html');
// });

router.get('/protected', function (req, res, next) {
    passport.authenticate('jwt', function (err, user, info) {
        if (err) {
            // internal server error occurred
            return next(err);
        }
        if (!user) {
            // no JWT or user founc
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
        if (user) {
            // authentication was successful! send user the secret
            return res
                .status(200)
                .json({ secret: '123' });
        }
    }) (req, res, next);
});

module.exports = router;