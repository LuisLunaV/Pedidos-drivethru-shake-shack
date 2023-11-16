import { recomendations, populars } from "../db/products.js";
import { getOrderList } from "../services/api-call.js";
import {
  carousel,
  addOrdersListHtml,
  addOrdersListCorrectHtml,
  addRecomendatiosHtml,
  addPopularsHtml,
  socketsConnection,
  printNewOrder
} from "../index.js";

class Main {
  init() {
    this.printOrderList();
    this.printRecomendations();
    this.printPopulars();
    this.socket();
    // this.servicesApi();
    // Agregamos los efectos de swiper hasta que se impriman todos los componentes en html
    this.swiper();
  }
  printRecomendations() {
    recomendations.forEach(addRecomendatiosHtml);
  }
  printPopulars() {
    populars.forEach(addPopularsHtml);
  }
  printOrderList() {
    printNewOrder();
  }
  socket() {
    socketsConnection();
  }
  servicesApi(){
    getOrderList();
  }
  swiper() {
    carousel();
  }
}

export { Main };
