var mongoose = require('mongoose');
var Schema = mongoose.Schema

var {recipeSchema} = require('./recipe')

var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  recipes: [recipeSchema]
})

var User = mongoose.model('User', userSchema)

module.exports = {
  User: User,
  userSchema: userSchema
}