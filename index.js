var myAppModule = angular.module("myApp", []);

myAppModule.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "filteringNames",
      templateUrl: "templates/home.html"
    })
    .when("/page1", {
      controller: "filteringNames",
      templateUrl: "templates/pageOne.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});

myAppModule.controller("filteringNames", [
  "$scope",
  function($scope) {
    $scope.customers = [
      {
        name: "Pallav",
        city: "Delhi"
      },
      {
        name: "Sana",
        city: "Sydney"
      },
      {
        name: "Bush",
        city: "Washington"
      }
    ];
  }
]);
