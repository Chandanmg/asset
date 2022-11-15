const mongoose = require('mongoose');

const addUserDetails = mongoose.Schema({
    name: {type : String, required: true}
});

module.exports = mongoose.model('AddUserDetails', addUserDetails);