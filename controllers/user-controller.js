var { User } = require('../models/user')
var _ = require('lodash')


function index(req, res) {
  User
  .find()
  .exec(function(err, users) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find user because ${err}`})
    } else if(!users) {
      res.status(404).json({errorMessage: `No users found`})
    }
    else {
      res.json(users)
    }
  })
}


function show(req, res) {
  User
  .findById(req.params.id)
  .exec(function(err, user) {
    if(err) {
      res.status(500).json({errorMessage: `Could not find user because ${err}`})
    } else if(!user) {
      res.status(404).json({errorMessage: `No user was found at id: ${req.params.id}`})
    }
    else {
      res.json(user)
    }
  })
}

function update(req, res) {
  var body = _.pick(req.body, ["firstName", "lastName", "email", "phone", "dob", "address1", "address2", "city", "state", "zip", "cardNumber", "cardType", "security"])

  // $set allows us to set the body as the new value of the record
  // {new: true} means that what gets returned in the callback is the new record - defaults to old.
  User
  .findByIdAndUpdate(req.params.id, {$set: body}, {new: true}, function(err, user) {
    if(err) {
      res.status(500).json({errorMessage: `There was an error with our DB: ${err}`})
    }
    else if(!user) {
      res.status(404).json({errorMessage: `User Record could not be found`})
    }
    else {
      res.json(user)
    }
  })
}

function destroy(req, res) {
  User
  .findByIdAndRemove(req.params.id, function(err, user) {
    if(err) {
      res.status(500).json({errorMessage: `Could not perform delete because: ${err}`});
    } else if (!user) {
      res.status(404).json({errorMessage: `No user was found at id: ${req.params.id}`})
    }
    else {
      res.json(user)
    }
  })
}

// function index(req, res) {
//   res.json({users: users})
// }

// function create(req, res) {
//   var newUser = new User(userId++, req.body.firstName, req.body.lastName, req.body.password, req.body.email, req.body.dob)

//   users.push(newUser)
//   res.json({user: newUser})
// }

// function show(req, res) {
//   for (var i = 0; i < users.length; i++) {
//     if(users[i].id == req.params.id) {
//       res.json({user: users[i]})
//     }
//   }
// }

// function update(req, res) {
//   console.log(req.body);

//   var tempUser = new User(req.body.id, req.body.firstName, req.body.lastName, req.body.password, req.body.email, req.body.dob)

//   for (var i = 0; i < users.length; i++) {
//     if(users[i].id == req.params.id) {
//       users.splice(i, 1, tempUser)
//     }
//   }

//   res.json({user: tempUser})
// }

// function destroy(req, res) {
//   for (var i = 0; i < users.length; i++) {
//     if(users[i].id == req.params.id) {
//       users.splice(i,1)
//     }
//   }
//   res.json({users: users})
// }

module.exports = {
  index: index,
  show: show,
  update: update,
  destroy: destroy
}