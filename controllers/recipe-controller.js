var { User } = require('../models/user')
var _ = require('lodash')

function addRecipeToUser(req, res) {
  console.log("Params: ", req.params)
  console.log("User: ", req.body)

  var body = _.pick(req.body, ["firstName", "lastName", "password", "email", "dob", "recipes"])

  User
    .findByIdAndUpdate(req.params.id, { $set: body }, { new: true }, function (err, user) {
      if (err) {
        res.status(500).json({ errorMessage: `There was an error with our DB: ${err}` })
      } else if (!user) {
        res.status(404).json({ errorMessage: `User Record could not be found` })
      } else {
        res.json(user)
      }
    })
}

function deleteRecipeFromUser(req, res) {
  res.json({ message: "deleteRecipeToUser" })
}

module.exports = {
  addRecipeToUser: addRecipeToUser,
  deleteRecipeFromUser: deleteRecipeFromUser
}