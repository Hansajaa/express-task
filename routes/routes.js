const express = require("express");
const router = express.Router();
const categoryController = require('../controller/category.controller');
const userController = require('../controller/user.controller');
const tripController = require('../controller/trip.controller');

//get all category API 
router.get("/category", function (req, res) {

    categoryController.getAll(function (data){
        res.json({
            status : 200,
            message : "Categories fetched",
            categories: data    
        })
    });

});

//get user by Id API
router.get("/user/:id",(req,res)=>{
    
    let userId = req.params.id
    
    userController.getUser(userId,(data)=>{
        res.json({
            status:200,
            message:`User ${userId} fetched`,
            user:data
        })
    })
    
})

// Create New Trip
router.post("/trip/create",(req, res)=>{
    
    const trip = req.body;

    tripController.createTrip(trip,(isSaved)=>{
        if (isSaved) {
            res.json(trip);
        }else{
            res.json({
                message:"Trip Not Saved"
            })
        }
    });
})

// Get trips by user and category ids
router.get("/trip/:userId/:categoryId",(req,res)=>{

    let userId = req.params.userId;
    let categoryId = req.params.categoryId;

    tripController.getTripsByUserAndCategoryIds(userId,categoryId,(data)=>{
        res.json({
            status:200,
            message: `Trips fetched for user ${userId}, category ${categoryId}`,
            category:{
                id:categoryId
            },
            user:{
                id:userId
            },
            trips:data
        })
    })
})


module.exports = router;
