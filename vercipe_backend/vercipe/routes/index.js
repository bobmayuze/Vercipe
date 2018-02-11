var express = require('express');
var router = express.Router();
var recipeModels = require('../models/models');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
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
  newRecipe.creator = req.body.creator || "Gordon Ramsay";
  newRecipe.materials = req.body.materials || ["A", "B"];
  newRecipe.version = req.body.version || 1;
  newRecipe.save((err) => {
    if (err) console.log(err);
    else {
      console.log("successfully registered");
      res.send("success ... ");
    }
  });
});

// Read all recipes
router.get("/allRecipes",(req, res)=>{
  allRecipes = recipe.find((err, result)=>{
    res.send(result);
  });
});

// Find one by id
router.post("/recipes", (req, res) => {
  console.log("By id Findding result for", req.body)
  recipe.findById(mongoose.Types.ObjectId(req.body.id) , (err,result) => {
    console.log(result);
    res.send(result);
  });
});

// Find one by email
router.post("/recipes/byMail", (req, res) => {
  console.log("Findding result for", req.body.email)
  recipe.find({ "creator_email": req.body.email}, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// Delete one by id
router.delete("/recipes",(req, res)=>{
  console.log("DELETE ONE ");
  recipe.findByIdAndRemove(req.body.id, (err, target_recipe)=>{
    res.send(target_recipe);
  })
  // res.send("Delete executed successfully")
});



module.exports = router;
