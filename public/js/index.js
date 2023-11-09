import { addOrdersListHtml, addOrdersListCorrectHtml } from "./components/order-list.js";
import { carousel } from "./util/swiper.js";
import { socketsConnection } from "./util/socket.cliente.js";
import { getTotal } from "./helper/calculateTheTotal.js";

export{
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    carousel,
    getTotal,
    socketsConnection
}