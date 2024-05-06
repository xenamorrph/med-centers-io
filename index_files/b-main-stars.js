document.addEventListener('DOMContentLoaded', function(){
  const swiperIntro = new Swiper('.b-main-stars__body', {
    // Отключение слайдера, если слайдов меньше видимой области 
    watchOverflow: true,
    // Кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // Кол-во отображаемых слайдов
    slidesPerView: 1,
    // Стрелки
    navigation: {
      prevEl: '.b-main-stars__arrow_prev',
      nextEl: '.b-main-stars__arrow_next',
    },
    // // Управление с клавиатуры 
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Автопрокрутка
    // autoplay: {
    //   delay: 7000,
    // },
    // Зацикливание слайдов при прокрутке
    loop: true,
  });
})