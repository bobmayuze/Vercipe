var express = require('express');
var router = express.Router();
var Models = require('../models/models');
// var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var recipe = Models.recipeModel;
var service = require('../services/recipe');



async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  });
}

// [1] Get default api to make sure backend is successfully set
router.get('/', async(req, res, next)=>{
  // res.render('index', { title: 'Express X' });
  console.log('before wait', new Date());
  await wait(5 * 1000);
  console.log('after wait', new Date())
  res.send({"msg" : 'hello world2'});
});

// [2] Create a new recipe
router.post('/newRecipe', (req, res) => {
  service.createByReq(req,res);
});

// [3] Get all Recipes as json array
router.get("/allRecipes",(req, res)=>{
  allRecipes = recipe.find((err, result)=>{
    res.send(result);
  });
});

// [4] Find one by id
router.post("/recipes", async(req, res)=>{
  const target = await service.findRecipeById(mongoose.Types.ObjectId(req.body.id));
  res.send(target);
});

// [5] Find recipe by creator's email
router.post("/recipes/byMail", (req, res) => {
  console.log("Findding result for", req.body.email)
  recipe.find({ "creator_email": req.body.email}, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// [6] Find recipe by recipe's title
router.post("/recipes/byTitle", async(req, res)=>{
  const result = await service.findRecipeByTitle(req.body.title);
  res.send(result);
});

// [7] Delete recipe by recipe's ObjectId
router.delete("/recipes",(req, res)=>{
  console.log("DELETE ONE ");
  recipe.findByIdAndRemove(req.options.params.id, (err, target_recipe)=>{
    res.send(target_recipe);
  })
});

// [8] Clone a recipe from one recipe
router.post("/recipes/forkById", async(req, res)=>{
  const thisUser = req.session.user;
  if (thisUser) {
    const originalRecipe = await service.findRecipeById(mongoose.Types.ObjectId(req.body.id));
    var flag = await service.forkByRecipe(originalRecipe, thisUser);
    if (flag) {
      res.send("Success");
    } else {
      res.send("Nahhhhhh");
    };    
  }
  else{
    res.send("Please login first.");
  }

})

// [9] Get Previous version by ID
router.post("/recipes/previous", async(req, res) => {
  console.log(req.body.id);
  var current_recipe = await service.findRecipeById(req.body.id);
  console.log("Previous version is ", current_recipe.previous_version);
  var previous_version_recipe = await service.findRecipeById(current_recipe.previous_version);
  res.send(previous_version_recipe);
});


module.exports = router;
