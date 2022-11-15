const mongoose = require('mongoose');

const addCustomDetails = mongoose.Schema({
    field: {type: String, required: true},
    description: {type: String, required: true},
    example: {type: String, required: true}
})

module.exports = mongoose.model('AddCustomDetails', addCustomDetails);