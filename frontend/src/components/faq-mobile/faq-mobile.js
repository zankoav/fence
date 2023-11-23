import './faq-mobile.scss'

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.faq-mobile__card-item-title').forEach((item) => {
        item.onclick = function () {
            if (this.parentNode.classList.contains('faq-mobile__card-item_active')) {
                hideItem(this.parentNode)
            } else {
                showItem(this.parentNode)
            }

            document.querySelectorAll('.faq-mobile__card-item').forEach((it) => {
                if (this.parentNode != it) {
                    hideItem(it)
                }
            })
        }
    })

    function hideItem(cardItem) {
        const descriptionEl = cardItem.querySelector('.faq-mobile__card-item-description')
        const heightDescriptionEl = descriptionEl.offsetHeight
        descriptionEl.style.height = `${heightDescriptionEl}px`
        setTimeout(() => {
            descriptionEl.style.height = 0
            cardItem.classList.remove('faq-mobile__card-item_active')
        }, 10)
    }

    function showItem(cardItem) {
        const descriptionEl = cardItem.querySelector('.faq-mobile__card-item-description')
        descriptionEl.style.height = `initial`
        requestAnimationFrame(() => {
            const heightDescriptionEl = descriptionEl.offsetHeight
            descriptionEl.style.height = 0
            requestAnimationFrame(() => {
                descriptionEl.style.height = `${heightDescriptionEl}px`
                cardItem.classList.add('faq-mobile__card-item_active')
            })
        })
    }
})
