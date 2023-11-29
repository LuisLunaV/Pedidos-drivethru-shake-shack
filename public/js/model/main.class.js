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
  swiper() {
    carousel();
  }
}

export { Main };
