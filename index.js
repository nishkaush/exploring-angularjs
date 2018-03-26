var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("firstFactory", function() {
  var customers = [
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
  var factory = {};
  factory.getCustomers = function() {
    return customers;
  };
  return factory;
});

myAppModule.controller("filteringNames", [
  "$scope",
  "firstFactory",
  function($scope, firstFactory) {
    $scope.customers = firstFactory.getCustomers();

    $scope.addNewCustomer = function() {
      // console.log($scope.newName);
      // $scope.customers.push({ name: name, city: city });
      $scope.customers.push({ name: $scope.newName, city: $scope.newCity });
      $scope.newName = "";
      $scope.newCity = "";
    };
  }
]);

myAppModule.config(function($routeProvider, $locationProvider) {
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
