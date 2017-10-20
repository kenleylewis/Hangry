app.service("recipeService", function ($http) {

  //recipes
  this.getRecipes = function (resource) {
    return $http.get(`http://food2fork.com/api/search?key=97680edd7094e6a6cb650bb8cf9cafb9&q=${resource}`)
  }

    this.getAllRecipes = function () {
    return $http.get(`http://food2fork.com/api/search?key=97680edd7094e6a6cb650bb8cf9cafb9`)
  }

  this.addRecipeToUser = function(recipe, user) {
    user.recipes.push(recipe)
    console.log(user);
    return $http.put("/recipe/addrecipe/" + user._id, user) 
  }

  this.removeRecipeFromUser = function(recipe, user) {
    
  }
})