app.service("userService", function ($http) {

  this.getUsers = function () {
    return $http.get("/user")
  }

  this.getUserById = function (id, cb) {
    if (id == "" || id == undefined || id == null){
      var userTemp = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        dob: ""
      }
      cb(userTemp)
    }else{
      $http.get("/user/" + id)
      .then(function(response){
        console.log(response)
      },function(error){
        console.log(error)
      })
    }
  }

  this.addUser = function (user) {
    return $http.post("/user", user)
  }

  this.updateUser = function (user) {
    return $http.put("/user/" + user.id, user)

  }

  this.deleteUser = function (id) {
    return $http.delete("/user/" + id)

  }
})