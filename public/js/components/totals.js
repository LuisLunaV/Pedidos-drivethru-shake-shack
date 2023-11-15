import { getTotal } from "../index.js";

const total      = document.querySelector(".amount-total-total h2");
const totalModal = document.querySelector(".footer-order-total p");

export const addTotals = (data) => {

  const result = getTotal(data);

  total.innerText      = `$${result}`;
  totalModal.innerText = `$${result}`;
};
