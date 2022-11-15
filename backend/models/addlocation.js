const mongoose = require('mongoose');

const addLocationDetails = mongoose.Schema({
    name: {type : String, required: true}
});

module.exports = mongoose.model('AddLocationDeatils', addLocationDetails);