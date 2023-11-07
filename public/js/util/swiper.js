export function carousel() {
  // MOdal publicitario
  new Swiper(".swiper2",{
    slidesPerView: 1,
      // spaceBetween: 25,
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

    //Carrucel de rcomendados 
  new Swiper(".swiper", {
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch:0,
      depth:300,
      modifier:1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },

  });


}
