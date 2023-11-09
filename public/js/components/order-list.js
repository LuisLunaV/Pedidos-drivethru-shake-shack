import { getTotal } from "../index.js";

const ulListOrders        = document.querySelector(".ulList-orders");
const ulListOrdersCorrect = document.querySelector(".ulList-orders-correct");

const total               = document.querySelector(".amount-total-total h2");
const totalModal          = document.querySelector(".footer-order-total p");

const addOrdersListHtml = ( data ) => {
  const html = `<li class="ulList-orders-li">
                <div class="order-amount">
                  <h2>${ data.cantidad }</h2>
                </div>
                <div class="order-type">
                  <h3>${ data.description }</h3>
                  <ul class="ul-order-content"></ul>
                </div>
                <div class="order-price">
                 <span>$</span><p>${ data.precio.toFixed(2) }</p>
                </div>
              </li>
    `;

  ulListOrders.innerHTML += html;
  
  const result = getTotal( data );

  total.innerText      = `$${ result }`;
  totalModal.innerText = `$${ result }`;
};

const addOrdersListCorrectHtml = ( data ) => {
  const html = `<li class="ulList-orders-li-correct">
              <div class="order-amount-correct">
                <h2>${ data.cantidad }</h2>
              </div>
              <div class="order-type-correct">
                <h3>${ data.description }</h3>
                <ul class="ul-order-content-correct"></ul>
              </div>
              <div class="order-price-correct">
               <span>$</span><p>${ data.precio.toFixed(2) }</p>
              </div>
            </li>`;
  ulListOrdersCorrect.innerHTML += html;
};

export { addOrdersListHtml, addOrdersListCorrectHtml };
