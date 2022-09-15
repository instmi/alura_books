const swiper = new Swiper('.swiper', {
   spaceBetween: 20, // espaço entre cada slide
   slidesPerView: 2, // quantos slides ficam à mostra 
   breakpoints: {
      // quando a janela for maior ou igual a:
      640: {
        slidesPerView: 3,
        spaceBetween: 48
      }
    },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   mousewheel: {
      invert: true,
   },
});