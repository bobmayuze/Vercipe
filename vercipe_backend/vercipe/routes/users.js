var express = require('express');
var router = express.Router();
var Models = require('../models/models');
var user = Models.userModel;
var userService = require('../services/user');
var recipeService = require('../services/recipe');


// [1] Default, test encrypt function
router.get('/', function(req, res, next) {
  userService.encrypt("Yoho");
  res.send({ "msg": 'hello world' });
});

// [2] Sign Up
router.post('/sign_up', function (req, res, next) {
  userService.createUser(req,res);
  // res.send('respond with a resource');
});

// [3] Login as user
// Login, this will attach session to user
router.post('/log_in', (req,res,next)=>{
  console.log("LOG IN...");
  userService.login(req, res);
});

// [4] demo endpoint to test if user is logged in
// dashborad for checking if used is loged in or not
router.post('/dashboard', (req, res, next) => {
  var login = userService.checkStatus(req, res);
  if (login) {
    console.log("Welcome to Vercipeeeee");
    res.send({"status":"success"});
  }
  else {
    console.log("Please login first");
    res.send({"status":"failed"});
  }
});

// [5] Get all recipes made by a user 
router.post('/allRecipes', async (req, res, next) => {
  var userEmail = req.body.creator_email;
  console.log(userEmail);
  var results = await recipeService.findRecipeByCreatorEmail(userEmail);
  res.send({"message": results});
});
module.exports = router;
