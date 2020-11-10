const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
// do not need "const passportConfig = require('./services/passport')" because 
// require does not return anything, it just needs to be executed - so there is 
// no reason to assign the return value of the require statement to a constant, 
// as nothing is returned anyway.
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

// USEFUL ADDRESSES FOR TESTING:

// https://console.developers.google.com
// http://localhost:5000/auth/google

const app = express();

// maxAge => milliseconds, 
// so 30 days = 30days * 24 hrs/day * 60 mins/hr * 60 sec/min * 1000 milliseconds/sec
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }) 
);
app.use(passport.initialize());
app.use(passport.session());


// require returns a function, then app is the argument for the function
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);