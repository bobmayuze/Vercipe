var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://vercipeDev:vercipeDevPass@mongo_db:27017/VercipeDB', {
    useMongoClient: true,
});

var recipe = new mongoose.Schema({
    title: String,
    creator: { 
        type:String, 
        default:"UZ"
    },
    creator_email: { 
        type: String, 
        default: "idiot@sandiwch.com"
    },
    materials: [String],
    instructions: { 
        type: String, 
        default: "1. Grab two pieces of toast and an idiot. 2. Put the toasts on each side of the idiot. 3. Vola, you got an idiot sandwich!" 
    },
    version: {
        type: Number, 
        default: 1
    },
    created_at: { 
        type: Number, 
        default: (new Date().getTime())
    },
    previous_version: String
});

exports.recipeModel = mongoose.model("recipe", recipe, "Recipes");