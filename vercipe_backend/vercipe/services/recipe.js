var express = require('express');
var router = express.Router();
var recipeModels = require('../models/models');
var recipe = recipeModels.recipeModel;

module.exports.log = (msg)=>{
    console.log(msg);
};

module.exports.createByTitle = (title)=> {
    var newRecipe = new recipe;
    newRecipe.title = title || "idiot sandwich";
    newRecipe.creator = "Master Yi";
    newRecipe.materials = ["AX", "BY"];
    newRecipe.version = 2;
    newRecipe.save((err) => {
        if (err) console.log(err);
        else {
            console.log("successfully registered");
        }
    });
};

module.exports.createByReq = (req, res)=>{
    console.log("Creating new Recipe ")
    var newRecipe = new recipe;
    newRecipe.title = req.body.title || "idiot sandwich";
    newRecipe.creator = req.body.creator || "Gordon Ramsay";
    newRecipe.materials = req.body.materials || ["A", "B", "C"];
    newRecipe.version = req.body.version || 1;
    newRecipe.save((err) => {
        if (err) console.log(err);
        else {
            console.log("successfully registered");
            res.send("success ... ");
        }
    });
};

module.exports.findRecipeById = async (id)=>{
    var target;
    await recipe.findById(id, (err, result) => {
        target = result;
    });
    return target;
}

module.exports.findRecipeByName = (req, res)=>{
    console.log("TODO");
};

