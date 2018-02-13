var express = require('express');
var router = express.Router();
var models = require('../models/models');
var user = models.userModel;
var md5 = require('md5');
var session = require('express-session')

module.exports.encrypt = (content) =>{
    console.log(md5('message'));
}

module.exports.createUser = (req, res)=>{
    var newUser = new user;
    newUser.email = req.body.email || "idiot@sandwich.com";
    newUser.username = req.body.username || "idiotSandwich";
    newUser.password = md5((req.body.password) || ("123456"));
    newUser.passwordConf = md5((req.body.passwordConf) || ("123456"));
    newUser.save((err)=>{
        if (err) {
            console.log(err);
        }
        else {
            console.log("successfully registered");
            res.send("Account successfully created");
        }
    });
};

module.exports.login = (req, res)=>{
    var username = req.body.username;
    var password = md5(req.body.password);
    console.log(username, password);
    user.findOne({username: username, password: password}, (err, result)=>{
        if (err) {
            console.log("ERROR on login");
            return res.status(500).send();
        }
        if (!result) {
            console.log("Login failed");
            return res.status(404).send();
        }
        console.log("Login successfully as", username);
        console.log(result);
        req.session.user = result;
        return res.status(200).send();
        
    });
}

module.exports.checkStatus = (req,res)=>{
    if(!req.session.user){
        return false;
        return res.status(401).send();
    }
    return true;
    // return res.status(200).send("Welcome to Vercipe");
}