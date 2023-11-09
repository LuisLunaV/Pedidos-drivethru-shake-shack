export const socketsConnection=()=>{
const socket = io();

socket.on("connect",()=>{
    console.log('conctado desde front')
})
}