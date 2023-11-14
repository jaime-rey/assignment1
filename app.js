(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", function ($scope) {
      console.log("LunchCheckController");
      $scope.listText = "";
      $scope.listItemsNumber = 0;
      $scope.listItems = [];
      $scope.errorMessage = "test";

      $scope.checkText = function () {
        console.log("checkText");
        $scope.listItems = $scope.listText.split(",");
        $scope.listItemsNumber = $scope.listItems.length;
        console.log("listItemsNumber: " + $scope.listItemsNumber);
        if ($scope.listItemsNumber <= 3) {
          console.log("cucucu " + $scope.listItemsNumber);
          $scope.errorMessage = "ok with the list";
        } else {
          $scope.errorMessage = "not ok with the list";
        }
      };
    });
})();
