const fetch = require("node-fetch");
const controllersDB = require("../database/controllersDB");
const movieModel = require("../models/movie");

const getMoviesByName = async (ctx) => {
  //    console.log("Entro");
  const res = await fetch(`http://www.omdbapi.com/?t=${ctx.query.name}&apikey=59c9be28`)
    .then((response) => response.json())
    .then((data) => {
      const movie = new movieModel({
        title: data.Title,
        year: data.Year,
        release: data.Release,
        genre: data.Genre,
        director: data.Director,
        actors: data.Actors,
        plot: data.Plot,
        ratings: data.Ratings,
      });

      console.log(movie);
      return movie;
    })
    .catch((e) => {
      return e;
    });

  // Agregar Pelicula a MongoDB

  controllersDB.addMovies(res);

  // Mostrar en body lo que se agrega a  MongoDB
  ctx.body = { res };
};

module.exports = {
  getMoviesByName,
};
