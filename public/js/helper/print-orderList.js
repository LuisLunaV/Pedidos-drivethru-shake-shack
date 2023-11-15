import { addOrdersListHtml, addOrdersListCorrectHtml, addTotals, clearOrderList } from "../index.js";
export const printNewOrder =( newOrder )=>{

    if(!newOrder) return;

    clearOrderList();
    
    showAdvertisingModal();

    newOrder.forEach( data => {
        // console.log(data)
        data.precio = parseInt( data.precio)
        addOrdersListHtml(data);
        addOrdersListCorrectHtml(data);
    });

    addTotals( newOrder );

}

function showAdvertisingModal(){
    const advertisingModal = document.querySelector(".modal-publicidad");
    
    //Ocultamos la publicidad
    advertisingModal.classList.add('ocultar-advertising');

    //Despues de diez segundos de inactividad agregamos nuevamente la publicidad
    setTimeout(()=>{
    advertisingModal.classList.remove('ocultar-advertising')
    },10000);
}