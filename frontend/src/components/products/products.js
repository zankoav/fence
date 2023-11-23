import './products.scss'
document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.product__button .button').forEach((buttonEl) => {
        buttonEl.onclick = function () {
            const type = this.getAttribute('data-type')
            document.querySelector(`.pricing__header-item_${type}`).click()
        }
    })
})
