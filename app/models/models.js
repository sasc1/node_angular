/**
 * All mongoose models are here defined.
 * There is no need to put them in separate files yet.
 * This way you can get the models pretty quick and use them with:
 *            var models = require("../../models/models");
 *            models.myModel.find({});
 */

var db = global.db;     // global.db is set in server.js and contains the DB

var mongoose = require("mongoose");

// example for model
var myModelsSchema = new mongoose.Schema({
    _id: Number,
    name: String
});

// make the model accessible, "mymodels" is the collection name in mongodb.
// be careful. you must use plural for all of your models. otherwise you will not
// be able to access the collections!
exports.myModels = db.model("mymodels", myModelsSchema);
