(function () {
  ("use strict");

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["LunchCheckController"];
  function LunchCheckController(LunchCheckController) {
    let list = this;
    list.listText = "";
    list.checkText = function () {
      console.log("LunchCheckController");
    };
  }
})();
