export const socketsConnection=()=>{
const socket = io();

socket.on("connect",()=>{
    console.log('conctado desde front')
})

socket.on("imprimir-pedido",( pedido )=>{
    console.log(pedido)
})
}