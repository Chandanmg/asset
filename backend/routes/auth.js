const express = require('express');
const Auth = require('../models/authUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ParseError } = require('@angular/compiler');
const { currentId } = require('async_hooks');

const router = express.Router();

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


router.post('/signup', (req, res, next)=> {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const auth = new Auth({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash, 
            });
            auth.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created',
                        result: result
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        })
});


router.post("/login", (req, res, next)=> {
    // console.log(req.body);
    let fetchedUser;
    Auth.findOne({email: req.body.email}).then(user => {
        if(!user){
            return res.status(401).json({
                message:"Auth failed",
            })
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
        if(!result){
            return res.status(401).json({
                message:"Auth failed",
            })
        }
        // const token = jwt.sign(
        //     {email: fetchedUser.email, userId: fetchedUser._id}, 
        //     'secret_this_should_be_longer',
        //     { expiresIn: '1h' }
        // );
        res.status(200).json({
            message: "login success" ,
            // currentUser: Parse.user.current(),
        })
        // console.log("here"),
        // console.log(currentId);
    })
    .catch(err => {
        return res.status(401).json({
            message:"Auth failed",
        })
    })
})

router.get('/login/:email', (req,res,next) => { 
    // console.log(req.params.id);
    Auth.findOne({ $all: [{email: req.body.email}] }).then(result => {
        res.status(200).json({
            message: 'add building data fetched successfully',
            posts: result
        });
        // console.log(result)
    })
})



// router.get('/login/:id', (req,res,next) => { 
//     // console.log(req.params.id);
//     Auth.findById(req.params.id).then(result => {
//         res.status(200).json({
//             message: 'add building data fetched successfully',
//             posts: result
//         });
//         console.log(result)
//     })
// })

// router.get("/login/:key",async (req,res)=>{
//     let data = await Auth.find(
//         {
//             "$or":[
//                 {firstname:{$regex:req.params.key}},
//             ]
//         }
//     )
//     res.send(data);

// })

// router.get('/login/:email', (req,res,next) => {
//     // console.log(documents)
//     Auth.findOne(req.body.email).then(documents => {
//         res.status(200).json({
//             message: 'add building data fetched successfully',
//             posts: documents
//         });
//         console.log(documents)
//     })
// })

// router.get('/login', (req,res,next) => { 
//     // let promise = User.findOne({ email: email })
//     Auth.findOne({ $all: ["chandan.melavarigeg@gmail.com"] })
//     .then(result => {
//         res.status(200).json({
//             message: 'add building data fetched successfully',
//             posts: result
//         });
//         console.log(result)
//     })
// })


module.exports = router;