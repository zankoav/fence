import './products-mobile.scss'

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.product-mobile .button').forEach((buttonEl) => {
        buttonEl.onclick = function () {
            const type = this.getAttribute('data-type')
            document.querySelector(`.pricing-mobile__header-item_${type}`).click()
        }
    })
})
