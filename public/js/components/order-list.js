
const ulListOrders        = document.querySelector(".ulList-orders");
const ulListOrdersCorrect = document.querySelector(".ulList-orders-correct");


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

const clearOrderList=()=>{
  ulListOrders.innerHTML = "";
  ulListOrdersCorrect.innerHTML = "";
}

export { addOrdersListHtml, addOrdersListCorrectHtml, clearOrderList };
