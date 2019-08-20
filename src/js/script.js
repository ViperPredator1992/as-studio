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
            } else if (target.classList.closest('burger')) {
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

});