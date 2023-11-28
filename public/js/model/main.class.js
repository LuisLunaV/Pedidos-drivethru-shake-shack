import { getOrderList } from "../services/api-call.js";
import {
  carousel,
  socketsConnection,
  printNewOrder
} from "../index.js";

class Main {
  init() {
    this.printOrderList();
    this.socket();
    this.swiper();
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
