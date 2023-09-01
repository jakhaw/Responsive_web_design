const pricing_swiper = new Swiper('.pricing-swiper', {
            
    direction: 'horizontal',
    loop: false,

    navigation: {
        nextEl: '.swiper-button-yearly',
        prevEl: '.swiper-button-monthly',
    },
});

const pricing_details_swiper = new Swiper('.pricing_details_swiper', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },

    pagination: {
        el: '.swiper-pagination-price',
        clickable: true,
        renderBullet: function(index, className) {
            if (index == 0){
                return '<button class="' + className + '">Starter</button>';
            } 
            else if (index == 1) {
                return '<button class="' + className + '">Normal</button>';
            }
            else {
                return '<button class="' + className + '">Premium</button>';
            }
        },
    },
});

const gallery_swiper = new Swiper('.gallery-swiper', {
    
    direction: 'horizontal',
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 84,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            centeredSlides: false,
        },
        1440: {
            slidesPerView: "auto",
            spaceBetween: 64,
            slidesOffsetBefore: 88,
            slidesOffsetAfter: 88,
            centeredSlides: false,
        },
    },
});