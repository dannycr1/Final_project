var passportApp = angular.module('passportApp', []);

passportApp.controller('PassportListCtrl', function($scope, $http) {
  $http.get('data.json').then(function(res) {
      $scope.data = res.data;
    });
});