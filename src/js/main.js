import Swiper, {Scrollbar} from 'swiper'

new Swiper ('.header-slider', {
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
})