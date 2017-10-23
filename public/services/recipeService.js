app.service("recipeService", function ($http) {

  //recipes
  this.getRecipes = function (resource) {
    return $http.get(`api &q=${resource}`)
  }

    this.getAllRecipes = function () {
    return $http.get(`api`)
  }

  this.addRecipeToUser = function(recipe, user) {
    user.recipes.push(recipe)
    console.log(user);
    return $http.put("/recipe/addrecipe/" + user._id, user) 
  }

  this.removeRecipeFromUser = function(recipe, user) {
    
  }
})