app.controller("recipeController", function ($scope, recipeService, authService) {

  $scope.currentUser = authService.currentUser;


  $scope.getRecipes = function () {
    recipeService.getRecipes($scope.cuisine)
      .then(function (response) {
        console.log(response)
        $scope.recipes = response.data.recipes;
      }, function (error) {
        console.log(error)
      })
    console.log($scope.cuisine);
  }

  $scope.grabRecipe = function (recipe) {
    recipeService.addRecipeToUser(recipe, $scope.currentUser);
    console.log(recipe);
  }



  recipeService.getAllRecipes()
    .then(function (response) {
      console.log(response)
      $scope.recipes = response.data.recipes;
    }, function (error) {
      console.log(error)
    })

})