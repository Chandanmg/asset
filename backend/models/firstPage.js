const mongoose = require('mongoose');

const organizationDetails = mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    post: { type: String, required: true },
    currency: { type: String, required: true },
})

module.exports = mongoose.model('OrganizationDetails', organizationDetails);