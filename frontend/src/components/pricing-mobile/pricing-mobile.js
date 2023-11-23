import './pricing-mobile.scss'

document.addEventListener('DOMContentLoaded', function (event) {
    const headerItems = document.querySelectorAll('.pricing-mobile__header-item')
    headerItems.forEach((item) => {
        item.addEventListener('click', function () {
            headerItems.forEach((it) => {
                it.classList.remove('pricing-mobile__header-item_active')
                if (item === it) {
                    it.classList.add('pricing-mobile__header-item_active')
                }
            })

            if (this.classList.contains('pricing-mobile__header-item_primary')) {
                document
                    .querySelector('.pricing-mobile__content_primary')
                    .classList.add('pricing-mobile__content_active')
                document
                    .querySelector('.pricing-mobile__content_secondary')
                    .classList.remove('pricing-mobile__content_active')
            } else if (this.classList.contains('pricing-mobile__header-item_secondary')) {
                document
                    .querySelector('.pricing-mobile__content_primary')
                    .classList.remove('pricing-mobile__content_active')
                document
                    .querySelector('.pricing-mobile__content_secondary')
                    .classList.add('pricing-mobile__content_active')
            }
        })
    })

    document.querySelectorAll('[data-required="yes"]').forEach((field) => {
        field.oninput = function () {
            this.parentNode
                .querySelector('.input-field__error-message')
                .classList.remove('input-field__error-message_active')
        }
    })
    const pricingFooter = document.querySelector('.pricing-mobile__content-footer')
    const pricingButton = pricingFooter.querySelector('.button')

    pricingButton.onclick = async () => {
        let error = false
        const data = new FormData()
        data.append('action', 'post_message')

        const pricingContent = document.querySelector('.pricing-mobile__content_active')
        const requiredFields = pricingContent.querySelectorAll('[data-required="yes"]')

        requiredFields.forEach((field) => {
            const input = field.querySelector('.input-field__input')
            data.append(input.name, input.value)
            if (!input.value) {
                field
                    .querySelector('.input-field__error-message')
                    .classList.add('input-field__error-message_active')
                error = true
            }
        })

        const addedField = pricingContent.querySelector('.textarea-field__textarea')
        data.append(addedField.name, addedField.value)

        if (!error) {
            console.log('data', data)

            clearPricingCards()
            document
                .querySelector('.pricing-mobile__card_spinner')
                .classList.add('pricing-mobile__card_active')
            try {
                await fetch(landing_ajax, {
                    method: 'POST',
                    credentials: 'same-origin',
                    body: data
                })
                clearPricingCards()

                const pricingCardThankYouEl = document.querySelector(
                    '.pricing-mobile__card_thank-you'
                )
                pricingCardThankYouEl.classList.add('pricing-mobile__card_active')
                const type = document
                    .querySelector('.pricing-mobile__content_active')
                    .classList.contains('pricing-mobile__content_primary')
                    ? 'Submit_Base'
                    : 'Submit_Figma'
                dataLayer.push({ event: ga4Type })
            } catch (error) {
                console.error(error)
            }
        }
    }

    function clearPricingCards() {
        document.querySelectorAll('.pricing-mobile__card').forEach((card) => {
            card.classList.remove('pricing-mobile__card_active')
        })
    }
})
