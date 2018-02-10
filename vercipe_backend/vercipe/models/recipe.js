var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://vercipeDev:vercipeDevPass@mongo_db:27017/VercipeDB', {
    useMongoClient: true,
});

var recipe = new mongoose.Schema({
    title: String,
    creater: { type:String, default:"UZ"},
    created_at: { type: Number, default: (new Date().getTime())}
});

exports.recipeModel = mongoose.model("recipe", recipe, "Recipes");