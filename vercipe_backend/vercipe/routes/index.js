var express = require('express');
var router = express.Router();
var recipeModels = require('../models/recipe');
var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');

var recipe = recipeModels.recipeModel;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express X' });
});

// Create a recipe
router.post('/newRecipe', (req, res) => {
  console.log("Creating new Recipe ")
  var newRecipe = new recipe;
  newRecipe.title = req.body.title || "idiot sandwich";
  newRecipe.creater = req.body.creater || "Gordon Ramsay";
  newRecipe.save((err) => {
    if (err) console.log(err);
    else {
      console.log("successfully registered");
      res.send("success ... ");
    }
  });
});

module.exports = router;
