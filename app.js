const Koa = require("koa");
const Router = require("koa-router");
const Cors = require("@koa/cors");
const BodyParser = require("koa-bodyparser");
const respond = require("koa-respond");

const app = new Koa();
const router = new Router();

app.use(Cors());
app.use(
  BodyParser({
    enableTypes: ["json"],
    jsonLimit: "5mb",
    strict: true,
    onerror: function (err, ctx) {
      ctx.throw("body parse error", 422);
    },
  })
);

app.use(respond());

// API routes
require("./server/routes")(router);

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
