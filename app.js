var bubleApp = angular.module('bubleApp', []);

bubleApp.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


bubleApp.controller('BubleListCtrl', function ($scope, $http) {
    function Buble(data) {
        this.date = data.date;
        this.time = data.time;
        this.user = data.user;
        this.content = data.content;
    }

    $scope.bubles = [];

    $http.get("http://127.0.0.1:8887/data.json").then(function successCallback(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.bubles.push(new Buble(response.data[i]));
        }
    });
});



