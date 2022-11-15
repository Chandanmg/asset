const express = require("express");
const router = express.Router(); 
const OrganizationDetails = require('../models/firstPage');

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

router.post('/firstpage', (req,res,next)=>{
    const organization = new OrganizationDetails({
        name: req.body.name,
        country: req.body.country,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        post: req.body.post,
        currency: req.body.currency
    });
    organization.save()
        .then(result => {
            res.status(201).json({
                message: 'Organization created',
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

module.exports = router;