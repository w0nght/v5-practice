const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');    // need for to accept the data from app
const mongoose = require('mongoose');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// importing models
const User = require('./models/user');
const routes = require('./routes/index');
const users = require('./routes/users');

// initialize http servers
const app = express();

// JWT configureation
const options = {}
// options.jwtFromRequest = ExtractJwt.fromAuthHeader();    // this was from ver 2 cause error
options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");    // ver 3.0
options.secretOrKey = '7x0jhxt&quot;9(thpX6';

//mlab configuration url
const MONGOURL = 'mongodb://fantipper:fantipper123@ds123311.mlab.com:23311/fantipper';

// configure Passport to use local strategy for initial
passport.use('local', new LocalStrategy(User.authenticate()));

// configure Passport to use JWT strategy to look up Users.
passport.use('jwt', new JwtStrategy(options, function(jwt_payload, done) {
    User.fineOne({
        _id: jwt_payload.id
    }, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
}));

//
// Faadu JS



// connecting to mongoose database
mongoose.connect(MONGOURL,{ useNewUrlParser: true })
.then(()=> console.log('DB connected'))
.catch(error => console.log(error));


app.use(bodyParser.json()); // converts the data doby to JSON format
app.use('/', routes);
app.use('/users', users);

// posting user data to database
app.post('/api/user/signup', (req, res) => {
    const user = new User ({
        email: req.body.email,
        password: req.body.password
    }).save((err, response) => {
        if(err) res.status(400).send(err)
        res.status(200).send(response)
    })
});

// handle / route
app.get('/', (req, res)=> {
    res.send('v4 fantipper2.0 server for testing');
})

const port = process.env.PORT || 4000;  // process.env.PORT is Heroku's port if choose to deploy app there
// launch the server on port 4000
app.listen(port, ()=> {
    console.log(`server running on ${port}`);
});

// app.listen(port, function(){
//     console.log('Server running on port:: ', port);
// });

// //views
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// //Body parser MiddleWare
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

// // Routes
// app.use('/', index);
// app.use('/api', bookings);