import { addOrdersListHtml, addOrdersListCorrectHtml } from "./components/order-list.js";
import { addRecomendatiosHtml } from "./components/recomendation.js";
import { addPopularsHtml } from "./components/populars.js";

import { carousel } from "./util/swiper.js";
import { socketsConnection } from "./util/socket.cliente.js";
import { getTotal } from "./helper/calculateTheTotal.js";

export{
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    addRecomendatiosHtml,
    addPopularsHtml,
    carousel,
    getTotal,
    socketsConnection
}