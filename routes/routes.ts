//const express = require("express");
import express from "express";
export const router = express.Router();
//const categoryController = require('../controller/category.controller');
import { getAll } from "../controller/category.controller";
// const userController = require('../controller/user.controller');
import { getUser } from "../controller/user.controller";
// const tripController = require('../controller/trip.controller');
import {
  createTrip,
  getTripsByUserAndCategoryIds,
} from "../controller/trip.controller";

import jwt from "jsonwebtoken";

//get all category API
router.get("/category", function (req: any, res: any) {
  getAll(function (data: any) {
    res.json({
      status: 200,
      message: "Categories fetched",
      categories: data,
    });
  });
});

//get user by Id API
router.get("/user/:id", (req: any, res: any) => {
  let userId = req.params.id;

  getUser(userId, (data: any) => {
    res.json({
      status: 200,
      message: `User ${userId} fetched`,
      user: data,
    });
  });
});

//get token by User Id
router.get("/user/token/:id", (req: any, res: any) => {
  let userId = req.params.id;

  getUser(userId, (data: any) => {
    let user = {
      id: data[0].ID,
      first_name: data[0].FIRST_NAME,
      last_name: data[0].LAST_NAME,
      email: data[0].EMAIL,
      profile_pic_url: data[0].PROFILE_PIC_URL,
    };

    jwt.sign(user, "secret1234", (err: any, token: any) => {
      if (err) {
        res.json({
          status: 403,
          message: `Invalid User Id ${userId}`,
        });
      } else {
        res.json({
          status: 200,
          token: token,
        });
      }
    });
  });
});

// Create New Trip
router.post("/trip/create", (req: any, res: any) => {
  const trip = req.body;

  createTrip(trip, (isSaved: boolean) => {
    if (isSaved) {
      res.json(trip);
    } else {
      res.json({
        message: "Trip Not Saved",
      });
    }
  });
});

// Get trips by user and category ids
router.get("/trip/:userId/:categoryId", (req: any, res: any) => {
  let userId = req.params.userId;
  let categoryId = req.params.categoryId;

  getTripsByUserAndCategoryIds(userId, categoryId, (data: any) => {
    res.json({
      status: 200,
      message: `Trips fetched for user ${userId}, category ${categoryId}`,
      category: {
        id: categoryId,
      },
      user: {
        id: userId,
      },
      trips: data,
    });
  });
});
