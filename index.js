const server = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`API server started on ${port}`));

const url = "mongodb://localhost/movienode_db";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONECTADO A MONGO");
  })
  .catch((e) => console.log("El error de conexión es " + e));
