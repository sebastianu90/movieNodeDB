const Router = require("koa-router");
const router = new Router();
const ctrl = require("../controllers/movies");

router.get("/allmovies", ctrl.getAllMovies);
router.post("/allmovies", ctrl.modifyMovie);

module.exports = router.routes();
