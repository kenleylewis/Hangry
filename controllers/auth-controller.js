var { User } = require('../models/user')
var _ = require('lodash')

function login(req, res) {
  User
    .findOne()
    .where('email').equals(req.body.email)
    .exec(function (err, user) {
      console.log("Err: ", err);
      console.log("User: ", user);
      if(err){
        res.status(500).json({errorMessage: `Could not perform the task because: ${err}`});
      } else if(!user) {
        res.status(404).json({errorMessage: `No user found`});
      }else{
        if(req.body.password == user.password){
          res.json(user)
        }else{
          res.status(403).json({errorMessage: `Forbidden`})
        }
      }
    })
}

function register(req, res) {
  user.create
  res.json({
    message: "Register Route"
  })
}

function register(req, res) {
  User
  .findOne()
  .where('email').equals(req.body.email)
  .exec(function(err, user) {
    if (user) {
      res.status(409).json({errorMessage: `A user already exists with that email account`});
    }
    else if (err) {
      res.status(500).json({errorMessage: `Could not perform task because: ${err}`});
    }
    else {
      var newUser = new User(req.body)
      newUser.save(function(err, user) {
        if(err) {
          res.status(500).json({errorMessage: `There was an error with our DB: ${err}`});
        }
        else {
          res.json(user)
        }
      })
    };
  })
}

module.exports = {
  login: login,
  register: register
}