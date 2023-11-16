import {
    addOrdersListHtml,
    addOrdersListCorrectHtml,
    addTotals,
    clearOrderList,
    clearTotals,
  } from "../index.js";
  
  // Elementos del DOM
  const advertisingModal = document.querySelector(".modal-publicidad");
  const confirmedModal = document.querySelector(".modal-order-correct");
  let timer;
  
  // Función principal para imprimir una nueva orden
  export const printNewOrder = (newOrder) => {
    if (!newOrder) return;
  
    // Comprobación si la orden es para mostrar publicidad
    if ('publicidad' in newOrder) {
      return newOrder.publicidad ? addPublicity() : removePublicity();
    }
  
    // Comprobación si la orden es para confirmar
    if (newOrder.confirmarOrden) return orderConfirmed();
  
    // Limpiar la lista de orden y mostrar el menú
    clearOrderList();
    showMenuShacke();
    renderOrders(newOrder);
  };
  
  // Función para renderizar las órdenes
  function renderOrders(newOrder) {
    newOrder.forEach((data) => {
      data.precio = parseInt(data.precio);
      addOrdersListHtml(data);
      addOrdersListCorrectHtml(data);
    });
  
    adjustListSize(newOrder);
    addTotals(newOrder);
  }
  
  // Función para manejar la confirmación de la orden
  function orderConfirmed() {
    showConfirmationModal();
    clearTimeout(timer);
  
    // Ocultar la confirmación después de un tiempo y mostrar la publicidad
    timer = setTimeout(() => {
      hideConfirmationModal();
      showAdvertisingModal();
      clearOrderList();
      clearTotals();
    }, 15000);
  }
  
  // Función para mostrar el menú principal
  function showMenuShacke() {
    hideAdvertisingModal();
    clearTimeout(timer);
  
    // Mostrar la publicidad después de un tiempo
    timer = setTimeout(() => {
      showAdvertisingModal();
      clearOrderList();
      clearTotals();
    }, 90000);
  }
  
  // Función para ajustar el tamaño de la lista de órdenes
  function adjustListSize(list) {
    if (list.length > 4) {
      const ulListOrder = document.querySelector(".ulList-orders");
      const mountText = document.querySelectorAll(".order-amount h2");
      const priceText = document.querySelectorAll(".order-price p");
  
      ulListOrder.classList.add("gap-0");
      mountText.forEach((node) => {
        node.classList.add("height-min");
      });
  
      priceText.forEach((node) => {
        node.classList.add("height-min");
      });
    }
  }
  
  // Funciones para manejar la publicidad
  function addPublicity() {
    hideConfirmationModal();
    showAdvertisingModal();
  }
  
  function removePublicity() {
    hideAdvertisingModal();
  }
  
  // Funciones para mostrar/ocultar la ventana de confirmación
  function showConfirmationModal() {
    confirmedModal.classList.remove("ocultar-order-list");
  }
  
  function hideConfirmationModal() {
    confirmedModal.classList.add("ocultar-order-list");
  }
  
  // Funciones para mostrar/ocultar la publicidad
  function showAdvertisingModal() {
    advertisingModal.classList.remove("ocultar-advertising");
  }
  
  function hideAdvertisingModal() {
    advertisingModal.classList.add("ocultar-advertising");
  }
  