const express = require("express");
const { response } = require("../app");
const router = express.Router();
const AddAssetDetails = require('../models/addAsset');

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

router.post('/addAsset', (req,res,next)=>{
    const add = new AddAssetDetails({
        name: req.body.name
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

router.get('/getAsset', (req,res,next)=>{
    AddAssetDetails.find().then(documents => {
        res.status(201).json({
            message: "get asset successfull",
            posts : documents
        })
    })
})

router.delete('/deleteAsset/:id', (req,res,next) => {
    AddAssetDetails.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Successfully deleted.....'
        })
    })
})

module.exports = router;