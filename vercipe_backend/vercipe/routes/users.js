var express = require('express');
var router = express.Router();
var Models = require('../models/models');
var user = Models.userModel;
var service = require('../services/user');


// [1] Default, test encrypt function
router.get('/', function(req, res, next) {
  service.encrypt("Yoho");
  res.send({ "msg": 'hello world' });
});

// [2] Sign Up
router.post('/sign_up', function (req, res, next) {
  service.createUser(req,res);
  // res.send('respond with a resource');
});

// [3] Login as user
// Login, this will attach session to user
router.post('/log_in', (req,res,next)=>{
  console.log("LOG IN...");
  service.login(req, res);
});

// [4] demo endpoint to test if user is logged in
// dashborad for checking if used is loged in or not
router.post('/dashboard', (req, res, next) => {
  var login = service.checkStatus(req, res);
  if (login) {
    console.log("Welcome to Vercipeeeee");
    res.send({"status":"success"});
  }
  else {
    console.log("Please login first");
    res.send({"status":"failed"});
  }
});
module.exports = router;
