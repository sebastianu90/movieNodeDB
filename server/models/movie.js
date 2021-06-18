const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: String,
    year: String,
    release: String,
    genre: String,
    director: String,
    actors: String,
    plot: String,
    ratings: Array,
  },
  { versionKey: false }
);

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
