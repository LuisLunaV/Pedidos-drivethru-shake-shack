const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io     = require("socket.io")(this.server);
    this.path = {
      mainAdvertising: "api/v1/mainAdvertising",
      advertising:     "api/v1/advertising",
      recommendation:  "api/v1/recommendation",
    };

    this.middlewares();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  router(){
    this.app.use( this.path.mainAdvertising,)
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

module.exports = {
    Server
}