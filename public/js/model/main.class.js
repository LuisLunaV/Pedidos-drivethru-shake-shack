import { getOrderList } from "../services/api-call.js";
import { imprimirPublicidad } from '../components/advertising-images.js';
import {
  // carousel,
  socketsConnection,
  printNewOrder
} from "../index.js";

class Main {
  init() {
    this.printAdvertising();
    this.printOrderList();
    this.socket();
    // setTimeout(()=>{
    //   this.swiper();
    // },500)
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

  printAdvertising(){
    imprimirPublicidad();
  }
  // swiper() {
  //     carousel();
  // }
}

export { Main };
