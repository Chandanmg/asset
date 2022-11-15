const express = require("express");
const router = express.Router();

const AddNewAsset = require("../models/addNewAsset");

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})


router.post('/addnewasset', (req,res,next) => {
    const add = new AddNewAsset({
        assetname: req.body.assetname,
        assetserial: req.body.assetserial,
        basiccost: req.body.basiccost,
        basicbrand: req.body.basicbrand,
        assettype: req.body.assettype,
        purchasedate: req.body.purchasedate,
        basicvendorname: req.body.basicvendorname,
        basicassetmodel: req.body.basicassetmodel,

        warduedate: req.body.warduedate,
        warrentyexpiryreminder: req.body.warrentyexpiryreminder,
        warnotifyto: req.body.warnotifyto,

        allocatetobuilding: req.body.allocatetobuilding,
        allocatetodepartment: req.body.allocatetodepartment,
        allocatetolocation: req.body.allocatetolocation,
        allocatetoperson: req.body.allocatetoperson,

        maintenancedue: req.body.maintenancedue,
        maintainancereminder: req.body.maintainancereminder,
        maintainancenotifyto: req.body.maintainancenotifyto,

        insurancenumber: req.body.insurancenumber,
        insurancedue: req.body.insurancedue,
        insurancevendor: req.body.insurancevendor,
        insurancenotifyto: req.body.insurancenotifyto,
        insurancereminder: req.body.insurancereminder,
        insuranceinsuredvalue: req.body.insuranceinsuredvalue,

        licencenumber: req.body.licencenumber,
        licencedate: req.body.licencedate,
        licensenotify: req.body.licensenotify,
        licencereminder: req.body.licencereminder,

        leasestartdate: req.body.leasestartdate,
        leaseenddate: req.body.leaseenddate,
        leasenotify: req.body.leasenotify,
        leasedfrom: req.body.leasedfrom,

        depreciablecost: req.body.depreciablecost,
        depreciablesalvationvalue: req.body.depreciablesalvationvalue,
        depreciablebegindate: req.body.depreciablebegindate,
        depreciableassetlife: req.body.depreciableassetlife,
        depreciablemethod: req.body.depreciablemethod,
    });
    add.save()
        .then(result => {
            res.status(201).json({
                message: 'success add',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.get('/getAddNewAsset', (req,res,next)=>{
    AddNewAsset.find().then(documents => {
        res.status(200).json({
            message: 'fetched successfully',
            posts: documents,
        });
    })
})

// router.get('/dashboard/getAddNewAsset/sum', (req,res,next)=>{
//     AddDashboardAsset.find().then(documents => {
//         res.status(200).json({
//             message: 'fetched successfully',
//             posts: documents,
//         });
//     })
// })

router.delete('/getAddNewAsset/:assetname', (req,res,next) => {
    AddNewAsset.findOne(assetname).then(documents => {
        res.status(200).json({
            message: 'fetched successfully',
            posts: documents
        });
    })
})

module.exports = router;