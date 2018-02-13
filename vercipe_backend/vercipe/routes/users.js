var express = require('express');
var router = express.Router();
var Models = require('../models/models');
var user = Models.userModel;
var service = require('../services/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  service.encrypt("Yoho");
  res.send('respond with a resource');
});

// Sign up
router.post('/sign_up', function (req, res, next) {
  service.createUser(req,res);
  // res.send('respond with a resource');
});

// Login, this will attach session to user
router.post('/log_in', (req,res,next)=>{
  console.log("LOG IN");
  service.login(req, res);
});

// dashborad for checking if used is loged in or not
router.get('/dashboard', (req, res, next) => {
  var login = service.checkStatus(req, res);
  if (login) {
    console.log("Welcome to Vercipeeeee");
    res.send("Welcome to Vercipeeeee");
  }
  else {
    console.log("Please login first");
    res.send("Please login first");
  }
});
module.exports = router;