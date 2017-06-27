var contactManagerApp = angular.module("contactManagerApp", []);

contactManagerApp.controller("MainController", ["$scope", function($scope) {
  $scope.message = "hello";
}]);
