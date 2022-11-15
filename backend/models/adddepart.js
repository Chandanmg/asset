const mongoose = require('mongoose');

const addDepartmentDeatils = mongoose.Schema({
    name: { type: String, required: true },
})

module.exports = mongoose.model('AddDepartmentDetails', addDepartmentDeatils);