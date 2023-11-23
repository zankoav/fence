import './header-mobile-error404.scss'
document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('.header-mobile__menu').onclick = () => {
        document
            .querySelector('.header-mobile__navigation')
            .classList.add('header-mobile__navigation_active')
    }

    document.querySelector('.header-mobile__close').onclick = () => {
        document
            .querySelector('.header-mobile__navigation')
            .classList.remove('header-mobile__navigation_active')
    }
})
