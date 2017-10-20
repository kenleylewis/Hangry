app.controller("userController", function ($scope, $state, $stateParams, userService, authService) {

  $scope.testCreate = "Create!"
  $scope.currentUser = authService.currentUser;


  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    $scope.submitButton = true;
    $scope.heading = "Create An Account!"

    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user;
    })
  }
  else {
    $scope.submitButton = false;
    $scope.heading = "Update Profile"

    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user;
    })
  }

  $scope.addUser = function () {
    console.log($scope.user);
    authService.register($scope.user);
  }

  $scope.deleteUser = function () {
    userService.deleteUser($scope.user);
  }

  $scope.updateUser = function () {
    userService.updateUser($scope.user);
  }

  $scope.getUsers = function () {
    userService.getUsers();
  }
})