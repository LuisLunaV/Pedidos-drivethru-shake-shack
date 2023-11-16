import { addOrdersListHtml, addOrdersListCorrectHtml, addTotals, clearOrderList, clearTotals } from "../index.js";
const advertisingModal = document.querySelector(".modal-publicidad");
const confirmedModal   = document.querySelector(".modal-order-correct");
let timer;

export const printNewOrder =( newOrder )=>{

    if(!newOrder) return;

    if( newOrder.confirmarOrden ) return orderConfirmed();
    
    clearOrderList();
    
    showMenuShacke();

    newOrder.forEach( data => {
        data.precio = parseInt( data.precio)
        addOrdersListHtml(data);
        addOrdersListCorrectHtml(data);
    });

    listSize( newOrder );

    addTotals( newOrder );

}

//Mostramos la pantalla de ordern confirmada
function orderConfirmed(){

    confirmedModal.classList.remove("ocultar-order-list");
    clearTimeout( timer );
    //Despues de diez segundos de inactividad agregamos nuevamente la publicidad
    timer = setTimeout(()=>{
        confirmedModal.classList.add("ocultar-order-list");
        advertisingModal.classList.remove('ocultar-advertising');
        clearOrderList();
        clearTotals();
        },15000);
}

// Mostramos el menu principa
function showMenuShacke(){   
    //Ocultamos la publicidad
    advertisingModal.classList.add('ocultar-advertising');
    clearTimeout( timer );

    //Despues de diez segundos de inactividad agregamos nuevamente la publicidad
   timer = setTimeout(()=>{
    advertisingModal.classList.remove('ocultar-advertising');
    clearOrderList();
    clearTotals();
    },90000);
}

//Si las ordenes superan mas de cuatro ordenes modificamos el tamano para brindar mas espacio
function listSize( list ){
    if( list.length > 4){
        const ulListOrder = document.querySelector(".ulList-orders");   
        const mountText = document.querySelectorAll(".order-amount h2");
        const priceText = document.querySelectorAll(".order-price p");
   
        ulListOrder.classList.add("gap-0");
        mountText.forEach( node =>{
            node.classList.add("height-min");
        })

        priceText.forEach( node =>{
            node.classList.add("height-min");
        })
    }
}