var app = angular.module("hangry", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("profile", {
      url: "/profile/:id",
      templateUrl: "./views/profile.html",
      controller: "userController"
    })
    // USERS
    .state("register", {
      url: '/users/register',
      templateUrl: "./views/users-form.html",
      controller: "userController"
    })
    .state("usersShow", {
      url: '/users/:id',
      templateUrl: "./views/user.html",
      controller: "userController"
    })
    .state("usersUpdate", {
      url: '/users/:id/edit',
      templateUrl: "./views/users-form.html",
      controller: "userController"
    })

    .state("recipe", {
      url: "/",
      templateUrl: "./views/recipe.html",
      controller: "recipeController"
    })
})