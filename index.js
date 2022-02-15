var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'today.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'product.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'productinfo.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'All products are dispatched';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://vaishnavikm.github.io/json-file-/getproducts.json')
        .success(function(response) {
            $scope.names = response.products;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://vaishnavikm.github.io/json-file-/getproducts.json')
        .success(function(response) {
            $scope.names = response.products;
            $scope.rowlimit = 6;
        });
});
