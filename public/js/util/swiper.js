export function carousel() {
  new Swiper(".swiper", {
    // slidesPerView: 3,
    // spaceBetween: 25,
    // direction: "horizontal",
    // loop: true,
    // autoplay: {
    //   delay: 5000,
    // },

// **---------------**//
    // swiper-wrapper
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
