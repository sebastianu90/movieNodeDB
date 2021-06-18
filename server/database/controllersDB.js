const movieModel = require("../models/movie");

// Mostrar todas las peliculas
const showMovies = async () => {
  const movies = await movieModel.find();
  console.log(movies);
  return movies;
};

// Buscar pelicula por nombre

const findMovieByName = async (name) => {
  const movie = await movieModel.find({ title: name });
  return movie[0].plot;
};

// Editar propiedad de pelicula

const editProperty = async (plot, wordFind, wordReplace) => {
  plot = plot.replace(wordFind, wordReplace);
  return plot;
};

// Agregar Pelicula

const addMovies = async (movie) => {
  const resultado = await movie.save();
  console.log("Se guardo pelicula");
};

const editMovie = async (id) => {
  const movie = await movieModel.updateOne(
    { _id: id },
    {
      $set: {
        title: "Cruella",
        year: "2020",
      },
    }
  );
};

const deleteMovie = async (id) => {
  const movie = await movieModel.deleteOne({ _id: id });
};

module.exports = {
  showMovies,
  findMovieByName,
  addMovies,
  editMovie,
  editProperty,
  deleteMovie,
};
