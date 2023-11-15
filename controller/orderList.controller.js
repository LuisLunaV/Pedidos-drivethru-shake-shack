const { request, response } = require('express');


const ordersList = {

    postOrderList: ( req = request, res = response  ) =>{
        try {
            const body = req.body;
          
            ordersList.emitToPrintOrder( body );
           return res.status(200).json({
                 msg: body 
                });
            
        } catch (error) {
            res.status(500).json({ error: "Error en el servidor" });
        }
    },

    socketsController:( socket )=>{
        ordersList.emitToPrintOrder = (data) =>{

            socket.emit("imprimir-pedido", data );
        }
     
            socket.on("nuevo-pedido", (datos)=>{
          
            })            
     

    }
}

module.exports = ordersList