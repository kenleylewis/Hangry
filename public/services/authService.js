app.service("authService", function ($http, $state) {

var that = this;
this.currentUser = null;

//login
this.login = function(user){
  console.log(user);
  $http.post("http://localhost:3000/auth/login", user)
    .then(function(response){
    console.log(response)
    that.currentUser = response.data
    console.log(that.currentUser)
    $state.go("profile", {id: response.data._id})
  },function(error){
    console.log(error)
  })
}

//logout
this.logout = function(){
  this.currentUser = null;
}

//register
this.register = function(user){
  $http.post("/auth/register", user)
  .then(function(response){
    console.log(response)
    $state.go("home")

  },function(error){
    console.log(error)
  })
}


})