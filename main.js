angular
   .module('shrooms', ['ngRoute'])
   .config((routeProvider) => {
      $routeProvider
         .when('/', {
            controller: "mainCtrl",
            templateUrl: "/shrooms.html"
         })
   })
