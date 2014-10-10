/**
 * Controller for main page.
 */
angular.module("MainCtrl", ["MyModelService"]).controller("MainController", ["$scope", "MyModelFactory", function ($scope, MyModelFactory) {
    $scope.myModelList = [];
    $scope.getMyModelList = function () {
        MyModelFactory.getAll().success(function (list) {
            $scope.myModelList = list;
        });
    };
}]);