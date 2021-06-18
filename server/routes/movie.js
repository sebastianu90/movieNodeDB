const Router = require("koa-router");
const router = new Router();
const ctrl = require("../controllers/movie");

router.get("/movie", ctrl.getMoviesByName);

module.exports = router.routes();
