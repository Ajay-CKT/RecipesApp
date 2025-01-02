// import express library
const express = require("express");
const recipeController = require("../controllers/recipeController");

// Create a express router
const recipeRouter = express.Router();

recipeRouter.get("/", recipeController.getAllRecipes);

recipeRouter.post("/", recipeController.createRecipe);

recipeRouter.get("/:id", recipeController.getRecipeById);

recipeRouter.put("/:id", recipeController.updateRecipe);

recipeRouter.delete("/:id", recipeController.deleteRecipe);

module.exports = recipeRouter;
