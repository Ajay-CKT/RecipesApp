const Recipe = require("../models/Recipe");

const recipeController = {
  getAllRecipes: async (request, response) => {
    try {
      const recipe = await Recipe.find({});
      response.json(recipe);
    } catch (error) {
      response.status(500).json({ error: "Failed to fetch recipes" });
    }
  },
  createRecipe: async (request, response) => {
    try {
      const {
        name,
        description,
        ingredients,
        steps,
        cookingTime,
        difficulty,
        category,
      } = request.body;

      const newRecipe = new Recipe({
        name,
        description,
        ingredients,
        steps,
        cookingTime,
        difficulty,
        category,
      });

      await newRecipe.save();
      response.json({ message: "Recipe added successfully" });
    } catch (error) {
      response.status(500).json({ error: "Failed to create recipe" });
    }
  },
  getRecipeById: async (request, response) => {
    try {
      const { id } = request.params;
      const recipe = await Recipe.findById(id);
      if (!recipe) {
        return response.status(404).json({ error: "Recipe not found" });
      }
      response.json(recipe);
    } catch (error) {
      response.status(500).json({ error: "Failed to fetch recipe" });
    }
  },
  updateRecipe: async (request, response) => {
    try {
      const { id } = request.params;
      const {
        name,
        description,
        ingredients,
        steps,
        cookingTime,
        difficulty,
        category,
      } = request.body;

      const updatedRecipe = {
        name,
        description,
        ingredients,
        steps,
        cookingTime,
        difficulty,
        category,
      };

      const result = await Recipe.findByIdAndUpdate(id, updatedRecipe);

      if (!result) {
        return response.status(404).json({ error: "Recipe not found" });
      }

      response.json({ message: "Recipe updated successfully", data: result });
    } catch (error) {
      response.status(500).json({ error: "Failed to update recipe" });
    }
  },
  deleteRecipe: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await Recipe.findByIdAndDelete(id);
      if (!result) {
        return response.status(404).json({ error: "Recipe not found" });
      }
      response.json({ message: "Recipe deleted successfully" });
    } catch (error) {
      response.status(500).json({ error: "Failed to delete recipe" });
    }
  },
};

module.exports = recipeController;
