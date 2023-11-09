import {
  carousel,
  addOrdersListHtml,
  addOrdersListCorrectHtml,
} from "../index.js";
const producto = [
  {
    cantidad: 1,
    description: "Sweet Classic - Combo",
    precio: 10.00,
  },
  {
    cantidad: 2,
    description: "Winky Brownie",
    precio: 3.50,
  },
  {
    cantidad: 3,
    description: "Orange Juice",
    precio: 5.50,
  },
  {
    cantidad: 1,
    description: "Coca cola",
    precio: 5,
  },
  {
    cantidad: 2,
    description: "Alitas",
    precio: 5,
  },
];

class Main {
  init() {
    this.swiper();
    this.printOrderList();
  }
  printOrderList() {
 
    producto.forEach((data) => {
      addOrdersListHtml(data);
      addOrdersListCorrectHtml(data);
    });
  }
  swiper() {
    carousel();
  }
}

export { Main };
