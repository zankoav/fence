import './textarea.scss'
import { LightningElement, api } from 'lwc'

export default class Textarea extends LightningElement {
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
            ? 'lwc-textarea-block__textarea lwc-textarea-block__textarea_valid'
            : 'lwc-textarea-block__textarea'
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
