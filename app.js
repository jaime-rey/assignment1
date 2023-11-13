(function () {
  ("use strict");

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["LunchCheckController"];
  function LunchCheckController(LunchCheckController) {
    var list = this;
  }
})();
