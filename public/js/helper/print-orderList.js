import { addOrdersListHtml, addOrdersListCorrectHtml, addTotals, clearOrderList } from "../index.js";
export const printNewOrder =( newOrder )=>{

    if(!newOrder) return;

    clearOrderList();
    
    newOrder.forEach( data => {
        // console.log(data)
        data.precio = parseInt( data.precio)
        addOrdersListHtml(data);
        addOrdersListCorrectHtml(data);
    });

    addTotals( newOrder );

}