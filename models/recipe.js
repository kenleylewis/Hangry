var mongoose = require('mongoose');
var Schema = mongoose.Schema

var recipeSchema = new Schema({
  f2f_url: String,
  image_url: String,
  publisher: String,
  publisher_url: String,
  recipe_id: Number,
  social_rank: Number,
  source_url: String,
  title: String
})

var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {
  Recipe: Recipe,
  recipeSchema: recipeSchema
}
