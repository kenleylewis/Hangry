app.controller("homeController", function ($scope, $http, $sce, $state, userService, recipeService, authService) {

  $scope.test = "Welcome Home!"

  $scope.user = authService.currentUser;
  console.log("Current User: ", $scope.user)

  $scope.login = function () {
    authService.login($scope.user)
  }

  recipeService.getAllRecipes()
    .then(function (response) {
      console.log(response)
      $scope.recipes = response.data.recipes;
    }, function (error) {
      console.log(error)
    })


  app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
})