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

        

    };

    slider();

});