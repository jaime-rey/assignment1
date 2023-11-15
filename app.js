(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", function ($scope) {
      console.log("LunchCheckController");
      $scope.listText = "";
      $scope.listItemsNumber = 0;
      $scope.listItems = [];
      $scope.errorMessage = "";

      $scope.checkText = function () {
        console.log("checkText");
        $scope.listItems = $scope.listText.split(",");
        $scope.listItemsNumber = $scope.listItems.length;
        console.log("listItemsNumber: " + $scope.listItemsNumber);
        if ($scope.listItemsNumber == 1 && $scope.listItems[0] == "") {
          $scope.errorMessage = "Please enter data first";
        } else if ($scope.listItemsNumber <= 3) {
          $scope.errorMessage = "Enjoy!";
        } else {
          $scope.errorMessage = "Too much!";
        }
      };
    });
})();
