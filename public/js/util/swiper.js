export function carousel() {
  new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: false,
    // }
  


  });
}
