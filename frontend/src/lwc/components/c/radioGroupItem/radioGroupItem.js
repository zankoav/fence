import './radioGroupItem.scss'
import { LightningElement, api } from 'lwc'

export default class RadioGroupItem extends LightningElement {
    static renderMode = 'light'
    @api item

    get itemClasses(){
        return this.item.selected ? 'lwc-radio-group-item lwc-radio-group-item_selected' : 'lwc-radio-group-item'
    }

    handleClick() {
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: this.item.value
            })
        )
    }
}
