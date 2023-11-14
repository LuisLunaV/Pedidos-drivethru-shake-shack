const express = require("express");
const cors = require("cors");


class Server {
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io     = require("socket.io")(this.server);
    this.path = {
      mainAdvertising: "/api/v1/mainAdvertising",
      advertising:     "/api/v1/advertising",
      recommendation:  "/api/v1/recommendation",
      orderList:       "/api/v1/orderList"
    };

    this.middlewares();
    this.sockets();
    this.router();
  }
  middlewares() {
    this.app.use(cors( ));
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  sockets(){
    this.io.on("connection", (socket) =>{
      socket.on("nuevo-pedido", (datos)=>{
        
        socket.emit("imprimir-pedido", datos );
      })
    });
  }

  router(){
    this.app.use( this.path.orderList, require("../routes/orderList.routes.js"));
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