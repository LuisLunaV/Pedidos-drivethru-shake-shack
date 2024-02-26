import { getAllImages1080x1920, getAllImages1080x1152 } from "../services/api-allImg.js";
import { carousel } from '../index.js';
const modalPrincipal = document.querySelector("#publicidad-principal");
const modalSecundario = document.querySelector("#publicidad-secundaria");


let contadorUno = 1;
const imagenPrincipalHtml = (imagen) => {
  const slideNumber = contadorUno;
  const imgNumber = contadorUno;
  const html = `<div class="swiper-slide slide-${slideNumber} slide-item img-${imgNumber}">
    <img src="assets/1080x1920/${imagen}" alt="imagen-publicitaria" />
    </div>`;

  modalPrincipal.innerHTML += html;
  contadorUno++;
};


let contadorDos = 1;
const imagenSecundarialHtml = ( imagen ) => {
    const slideNumber = contadorDos;
    const imgNumber = contadorDos;
    const html = `  <div class="swiper-slide slide-${slideNumber} slide-item img-${imgNumber}">
    <img src="assets/1080x1152/${imagen}" alt="imagen-publicitaria" />
  </div>`;
  modalSecundario.innerHTML += html;
  contadorDos++;
  };

  const imprimirPublicidad = async () => {
    const dataUno = await getAllImages1080x1920();
    const dataDos = await getAllImages1080x1152();

    const principal = Object.values(dataUno);
    const secundaria = Object.values(dataDos);

  
    principal.forEach(imagenPrincipalHtml);
    secundaria.forEach( imagenSecundarialHtml);
    //Despues de cargar las imagenes activamos los efectos del carrucel.
    carousel();
  };
  

export { imprimirPublicidad };

