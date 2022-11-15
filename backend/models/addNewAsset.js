const mongoose = require("mongoose");

const addNewAsset = mongoose.Schema({
    // userId: { type: String, required: true},
    assetname: { type: String, required:true },
    assetserial: { type: String, required:true },
    basiccost: { type: Number, required: true },
    basicbrand: { type: String, required: true },
    assettype: { type: String, required: true },
    purchasedate: { type: Date, required: true},
    basicvendorname: { type: String, required: true},
    basicassetmodel: { type: String, required: true},

    warduedate: { type: Date, required: true},
    warrentyexpiryreminder: { type: String, required: true},
    warnotifyto: { type: String, required: true},

    allocatetobuilding: { type: String, required: true},
    allocatetodepartment: { type: String, required: true},
    allocatetolocation: { type: String, required: true},
    allocatetoperson: { type: String, required: true},

    maintenancedue: { type: Date, required: true},
    maintainancereminder: { type: String, required: true},
    maintainancenotifyto: { type: String, required: true},

    insurancenumber: { type: String, required: true},
    insurancedue: { type: Date, required: true},
    insurancevendor: { type: String, required: true},
    insurancenotifyto: { type: String, required: true},
    insurancereminder: { type: String, required: true},
    insuranceinsuredvalue: { type: String, required: true},

    licencenumber: { type: String, required: true},
    licencedate: { type: Date, required: true},
    licensenotify: { type: String, required: true},
    licencereminder: { type: String, required: true},

    leasestartdate: { type: Date, required: true},
    leaseenddate: { type: Date, required: true},
    leasenotify: { type: String, required: true},
    leasedfrom: { type: String, required: true},

    depreciablecost: { type: String, required: true},
    depreciablesalvationvalue: { type: String, required: true},
    depreciablebegindate: { type: Date, required: true},
    depreciableassetlife: { type: String, required: true},
    depreciablemethod: { type: String, required: true},
})

module.exports = mongoose.model('AddNewAsset', addNewAsset);