const mongoose = require('mongoose');

const addAssetDetails = mongoose.Schema({
    name: {type: String, required: true}
})

module.exports = mongoose.model('AddAssetDetails', addAssetDetails);