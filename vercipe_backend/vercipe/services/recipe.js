var express = require('express');
var router = express.Router();
var recipeModels = require('../models/models');
var recipe = recipeModels.recipeModel;
var userService = require('./user');

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
    newRecipe.creator_email = req.body.creator_email || "idiot@sandwich.com";
    newRecipe.instructions = req.body.instructions || ["A", "B", "C"];
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

module.exports.findRecipeByCreatorEmail = async(creator_email) => {
    await console.log("Finding related to", creator_email);
    var target;
    await recipe.find({
        "creator_email": creator_email
    }, (err, result) => {
        console.log("Result: ",result);
        target = result;
    });
    return target;    
};

module.exports.forkByRecipe = async(originalRecipe, username)=>{
    console.log("User: \n", username, "is cloning ", originalRecipe.title);
    cloner = await userService.findUserByUsername(username);
    var newRecipe = new recipe;
    var flag;
    newRecipe.version = originalRecipe.version + 1;
    newRecipe.previous_version = originalRecipe.id;
    newRecipe.title = originalRecipe.title;
    newRecipe.instructions = originalRecipe.instructions;
    newRecipe.materials = originalRecipe.materials;
    newRecipe.creator = username;
    newRecipe.creator_email = cloner.email;

    await newRecipe.save((err) => {
        if (err) console.log(err);
        else {
            flag = true;
        }
    });
    return flag;
};



// module.exports.findNextVersionByRecipeId = async(current_id) => {

// }

module.exports.findPreviousVersionByRecipeId = async (current_id) => {
    console.log("Are you looking for ^_^",current_id);
    // var current_recipe = await findRecipeById(current_id);
    console.log(current_recipe);
    return
}


