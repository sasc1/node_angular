/**
 * Routes all requests at the backend/server.
 * @param app
 */
module.exports = function (app) {

    // route polls services
    app.get("/api/get_all_mymodels", function (req, res) {
        require("./services/get_all_mymodels")(req, res);
    });

    // route to handle all angular requests
    app.get("*", function (req, res) {
        res.sendfile("./public/views/index.html");
    });
};
