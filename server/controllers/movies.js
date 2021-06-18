const controllersDB = require("../database/controllersDB");

// Listar todas las peliculas

const getAllMovies = async (ctx) => {
  const res = await controllersDB.showMovies();
  ctx.body = { res };
};

const modifyMovie = async (ctx) => {
  const movieToEdit = {
    title: "Madagascar",
    wordFind: "animals",
    wordReplace: "HUMANS",
  };
  ctx.body = movieToEdit;
  ctx.response.status = 200;

  const res = await controllersDB
    .findMovieByName(movieToEdit.title)
    .then((response) => {
      return controllersDB.editProperty(response, movieToEdit.wordFind, movieToEdit.wordReplace);
    })
    .catch((e) => {
      return console.log(e);
    });

  console.log(res);
};

module.exports = {
  getAllMovies,
  modifyMovie,
};
