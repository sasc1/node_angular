/**
 * Service which returns all polls in JSON format.
 * @param req
 * @param res
 */
module.exports = function (req, res) {

    var models = require("../models/models");

    models.myModels.find({}).exec(function (error, mymodels) {
        res.json(mymodels);
    });

};