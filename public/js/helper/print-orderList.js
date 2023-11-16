import { addOrdersListHtml, addOrdersListCorrectHtml, addTotals, clearOrderList, clearTotals } from "../index.js";
const advertisingModal = document.querySelector(".modal-publicidad");
const confirmedModal   = document.querySelector(".modal-order-correct");

export const printNewOrder =( newOrder )=>{

    if(!newOrder) return;

    if( newOrder.confirmarOrden ) return orderConfirmed();
    

    clearOrderList();
    
    showMenuShacke();

    newOrder.forEach( data => {
        // console.log(data)
        data.precio = parseInt( data.precio)
        addOrdersListHtml(data);
        addOrdersListCorrectHtml(data);
    });

    addTotals( newOrder );

}

//Mostramos la pantalla de ordern confirmada
function orderConfirmed(){

    confirmedModal.classList.remove("ocultar-order-list");
    //Despues de diez segundos de inactividad agregamos nuevamente la publicidad
    setTimeout(()=>{
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

    //Despues de diez segundos de inactividad agregamos nuevamente la publicidad
    setTimeout(()=>{
    advertisingModal.classList.remove('ocultar-advertising');
    clearOrderList();
    clearTotals();
    },50000);
}