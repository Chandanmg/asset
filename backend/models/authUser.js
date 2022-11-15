const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const authUser = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

authUser.plugin(uniqueValidator);

module.exports = mongoose.model('Auth', authUser);