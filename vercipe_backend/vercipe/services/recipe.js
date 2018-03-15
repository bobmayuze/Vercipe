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
    newRecipe.previous_version = req.body.version || "None";
    newRecipe.save((err) => {
        if (err) console.log(err);
        else {
            console.log("successfully created");
            res.send({"status" : "success ... "});
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

module.exports.findRecipeByTitle = async(title)=>{
    await console.log("Finding related to", title);
    
    var target;
    await recipe.find({
        "title": { $regex: ".*" + title + ".*", $options: "gi" }
    }, (err, result) => {
        target = result;
    });
    return target;
};

module.exports.forkByRecipe = async(originalRecipe, user=null)=>{
    console.log("User: \n",user)

    var newRecipe = new recipe;
    var flag;
    newRecipe.version = originalRecipe.version + 1;
    newRecipe.previous_version = originalRecipe.id;
    newRecipe.title = originalRecipe.title;
    newRecipe.materials = originalRecipe.materials;
    newRecipe.creator = user.username;

    await newRecipe.save((err) => {
        if (err) console.log(err);
        else {
            flag = true;
        }
    });
    return flag;
};
