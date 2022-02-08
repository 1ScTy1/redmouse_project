import Swiper, {Scrollbar, Navigation} from 'swiper'

Swiper.use([Scrollbar, Navigation])

new Swiper ('.header-slider', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
})

new Swiper ('.main-slider__slider', {
    loop:true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
})
new Swiper ('.slider-info__slider', {
    loop:true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
})