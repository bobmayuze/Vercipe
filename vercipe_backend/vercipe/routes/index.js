var express = require('express');
var router = express.Router();
var Models = require('../models/models');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var recipe = Models.recipeModel;
var service = require('../services/recipe');
const asyncHandler = require('express-async-handler')


async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  });
}

/* GET home page. */
router.get('/', async(req, res, next)=>{
  // res.render('index', { title: 'Express X' });
  console.log('before wait', new Date());
  await wait(5 * 1000);
  console.log('after wait', new Date())
  res.send('hello world');
});

// Create a recipe
router.post('/newRecipe', (req, res) => {
  service.createByReq(req,res);
});

// Read all recipes
router.get("/allRecipes",(req, res)=>{
  allRecipes = recipe.find((err, result)=>{
    res.send(result);
  });
});

// Find one by id
router.post("/recipes", async(req, res)=>{
  const target = await service.findRecipeById(mongoose.Types.ObjectId(req.body.id));
  res.send(target);
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
});



module.exports = router;
