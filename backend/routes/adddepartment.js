const express = require("express");
const router = express.Router();
const AddDepartmentDetails = require('../models/adddepart');

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

router.post('/addDepartment', (req,res,next)=>{
    const add = new AddDepartmentDetails({
        name : req.body.name,

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

router.get('/addDepartment', (req,res,next)=>{
    AddDepartmentDetails.find().then(documents => {
        res.status(200).json({
            message: 'add building data fetched successfully',
            posts: documents
        });
        // console.log(documents)
    })
})

router.delete('/addDepartment/:id', (req,res,next) => {
    AddDepartmentDetails.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Successfully deleted.....'
        })
    })
})

module.exports = router;
