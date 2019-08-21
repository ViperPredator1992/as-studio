document.addEventListener('DOMContentLoaded', () => {

    'use strict';
    
    // Burger
    const burgerMenu = () => {

        const menu = document.querySelector('.burger'),
            menuNav = document.querySelector('.nav-list'),
            body = document.querySelector('body');

        body.addEventListener('click', (event) => {

            let target = event.target;

            if (target.closest('.burger')) {
                menu.classList.toggle('burger-open');
                if (menuNav.style.display === 'block') {
                    menuNav.style.display = 'none';
                } else {
                    menuNav.style.display = 'block';
                }
            } else if (target.closest('burger')) {
                menu.classList.remove('burger-open');
                menuNav.style.display = 'none';
            } else if (target.tagName !== 'DIV') {
                menu.classList.remove('burger-open');
                menuNav.style.display = 'none';
            } else {
                return;
            }
            
        });

    };

    burgerMenu();

    // Scroll menu

    // Isotope
    $(function () {
        $('.portfolio-works').isotope({
            itemSelector: '.portfolio-block'
        });

        $('.portfolio-list a').click(function () {

            $('.portfolio-list  a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');

            $('.portfolio-works').isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;

        });

    });

    // Validate form
    $('#form').validate({
        lang: 'ru',
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Введите имя"
            },
            phone: {
                required: "Введите телефон"
            },
            email: {
                required: "Введите email",
                email: "Введите корректный email"
            }
        }
    });

    // Slider
    const slider = () => {

        const slide = document.querySelectorAll('.review-list__item'),
            slider = document.querySelector('.review-list');
        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'review-list__item-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }  
            nextSlide(slide, currentSlide, 'review-list__item-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {

            event.preventDefault();
            let target = event.target;

            if (!target.matches('.review-arrow__prev, .review-arrow__next')) {
                return;
            }

            prevSlide(slide, currentSlide, 'review-list__item-active');

            if (target.matches('.review-arrow__next')) {
                currentSlide++;
            } else if (target.matches('.review-arrow__prev')) {
                currentSlide--; 
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'review-list__item-active');

        });

        slider.addEventListener('mouseover', (event) => {

            if (event.target.matches('.review-arrow__prev, .review-arrow__next')) {
                stopSlide();
            }

        });

        slider.addEventListener('mouseout', (event) => {

            if (event.target.matches('.review-arrow__prev, .review-arrow__next')) {
                startSlide();
            }

        });

        startSlide(3000);

    };

    slider();

});