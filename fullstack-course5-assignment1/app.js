(function() {
  'use strict';

  angular.module('LunchChecker',[])

  .controller('LunchCheckerController', function($scope) {
    $scope.enteredItems = "";
    $scope.outputText = "";
    $scope.checkFunction = function() {
      if($scope.enteredItems == "") {
        $scope.outputText = "Please enter data first";
      }
      else {
        var countOfInputs = $scope.countInputs($scope.enteredItems);
        if(countOfInputs <= 3) {
          $scope.outputText = "Enjoy!";
        }
        else {
          $scope.outputText = "Too Much!";
        }
      }
    }

    $scope.countInputs = function(inpStr) {
      var arrStr = inpStr.split(',');
      console.log(arrStr.length);
      return arrStr.length;
    }
  })


})()
