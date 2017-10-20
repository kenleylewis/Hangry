var express = require('express');
var router = express.Router();

var recipeController = require('../controllers/recipe-controller.js')

/* adding the functions in */
router.put('/addrecipe/:id', recipeController.addRecipeToUser);
router.put('/removerecipe/:id', recipeController.deleteRecipeFromUser);

module.exports = router;