/**
 * Polls service on the client side.
 */
angular.module("MyModelService", []).factory("MyModelFactory",
    ["$http", function ($http) {

        return {
            getAll: function () {
                return $http.get("/api/get_all_mymodels");
            }
        };
    }]);
