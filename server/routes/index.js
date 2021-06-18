module.exports = (router) => {
  router.prefix("/v1");
  router.use("/movie", require("./movie"));
  router.use("/allmovies", require("./allMovies"));
};
