const mongoose = require('mongoose');
// These next two lines are the same - the second is destructuring
//const Schema = mongoose.Schema;
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);