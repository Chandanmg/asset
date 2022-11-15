const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const firstRoutes = require('./routes/firstscreen');
const addBuildingRoutes = require('./routes/addbuildings');
const addDepartmentRoutes = require('./routes/adddepartment');
const addLocationRoutes = require('./routes/addLocation');
const addUserRoutes = require('./routes/addUser');
const addAssetDetails = require('./routes/addAsset');
const addCustomDetails = require('./routes/addCustom');
const addDashboardAssetDetails = require('./routes/addNewAsset');

var jwt = require('jsonwebtoken');

const app = express();

mongoose.connect("mongodb://localhost:27017/main")
    .then(() => {
        console.log("Connected to Database....");
    })
    .catch(() => {
        console.log("Failed to connect database....")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);
app.use(firstRoutes);
app.use(addBuildingRoutes);
app.use(addDepartmentRoutes);
app.use(addLocationRoutes);
app.use(addUserRoutes);
app.use(addAssetDetails);
app.use(addCustomDetails);
app.use(addDashboardAssetDetails);

// app.post('/api/log', (req,res)=>{
//     const user ={id: 3};
//     const token = jwt.sign({user}, 'my_secret_key');
//     res.json({
//         token: token
//     })
// })

module.exports = app;