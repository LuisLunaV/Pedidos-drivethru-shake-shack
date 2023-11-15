import { printNewOrder } from "../index.js";
export const socketsConnection=()=>{
const socket = io();

socket.on("imprimir-pedido",( pedido )=>{
    printNewOrder( pedido );
})
}