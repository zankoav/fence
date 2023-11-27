import './radioGroup.scss'
import { LightningElement, api } from 'lwc'

export default class RadioGroup extends LightningElement {
    static renderMode = 'light'
    @api model

    handleItemChange(event) {
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    name: this.model.name,
                    value: event.detail
                }
            })
        )
    }
}
