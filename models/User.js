const mongoose = require('mongoose');
// These next two lines are the same - the second is destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);