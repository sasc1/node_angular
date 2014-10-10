// modules =================================================
"use strict";
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var dbconfig = require("./config/dbconfig");
var db = mongoose.connection;
// make available in all modules
global.db = db;
mongoose.connect(dbconfig.url);

// if connection is successful
db.on("connected", function (ref) {
    console.log("Connected to DB");

    var port = process.env.PORT || 3000; // set our port

    // get all data/stuff of the body (POST) parameters
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    })); // parse application/vnd.api+json as json
    app.use(bodyParser.urlencoded({
        extended: true
    })); // parse application/x-www-form-urlencoded

    app.use(express.static(__dirname + "/public"));

    require("./app/routes")(app); // configure our routes

    // start app ===============================================
    app.listen(port); // startup our app at http://localhost:3000
    console.log("Server started on http://127.0.0.1:3000");
});

// If the connection throws an error
db.on("error", function (err) {
    console.error("Failed to connect to DB on startup ", err);
});

// When the connection is disconnected
db.on("disconnected", function () {
    console.log("Mongoose default connection to DB disconnected");
});

var gracefulExit = function () {
    db
        .close(function () {
            console
                .log("Mongoose default connection with DB is disconnected through app termination");
            process.exit(0);
        });
};

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);