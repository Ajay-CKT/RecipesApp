const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  ingredients: [{ name: String, quantity: String }],
  steps: [String],
  cookingTime: Number,
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
  },
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema, "recipes");
