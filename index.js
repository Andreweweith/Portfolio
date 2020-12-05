const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
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


// require returns a function, then app is the argument for the function -- these are function calls
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// catch all routes --> if all other options don't match the route, then give back the index.html file
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

};


const PORT = process.env.PORT || 5000;
app.listen(PORT);