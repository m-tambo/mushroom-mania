angular
   .module('shrooms', ['ngRoute'])
   .config((routeProvider) => {
      $routeProvider
         .when('/', {
            controller: "mainCtrl",
            templateUrl: "/shrooms.html"
         })
   })
   .controller('mainCtrl', function($scope, shroomFactory) => {
      console.log(shroom control)
      shroomFactory.getShrooms() => (console.log)

   })
   .factory('shroomFactory', function ($http) {
      return {
         getShrooms : function () {
            return $http
               .get('https://mushroom-mania-b4961.firebaseio.com/.json')
               .then( (response) => {
                  console.log(response)
               })
            }
      }
   })
