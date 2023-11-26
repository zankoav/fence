import './gallaryIcon.scss'
import { LightningElement, api } from 'lwc'

export default class GallaryIcon extends LightningElement {
    static renderMode = 'light'
    @api icon

    handleClick() {
        this.dispatchEvent(
            new CustomEvent('gallarychange', {
                detail: this.icon.url
            })
        )
    }
}
