import { addOrdersListHtml, addOrdersListCorrectHtml, clearOrderList } from "./components/order-list.js";
import { addRecomendatiosHtml } from "./components/recomendation.js";
import { addPopularsHtml } from "./components/populars.js";
import { addTotals } from "./components/totals.js";

import { carousel } from "./util/swiper.js";
import { socketsConnection } from "./services/socket.cliente.js";

import { getTotal } from "./helper/calculateTheTotal.js";
import { printNewOrder } from "./helper/print-orderList.js";

export{
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    clearOrderList,
    addRecomendatiosHtml,
    addPopularsHtml,
    addTotals,
    carousel,
    getTotal,
    socketsConnection,
    printNewOrder
}