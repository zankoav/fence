import './input.scss'
import { LightningElement, api } from 'lwc'

export default class Input extends LightningElement {
    static renderMode = 'light'

    @api name
    @api value
    @api label
    @api required
    @api errorMessage

    get showError() {
        return this.required && this.value === ''
    }

    get styleClass() {
        return this.value
            ? 'lwc-input-block__input lwc-input-block__input_valid'
            : 'lwc-input-block__input'
    }

    handleBlur(event) {
        this.value = event.target.value
    }

    handleChange(event) {
        this.value = event.target.value
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: event.target.value,
                    name: this.name,
                    required: this.required
                }
            })
        )
    }
}
