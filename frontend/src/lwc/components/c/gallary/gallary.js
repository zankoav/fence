import './gallary.scss'
import { LightningElement, api } from 'lwc'

export default class Gallary extends LightningElement {
    static renderMode = 'light'
    @api icons

    get main() {
        return this.icons.find((icon) => icon.main)
    }

    handleChange(event) {
        this.icons = this.icons.map((icon) => {
            return { ...icon, main: icon.url === event.detail }
        })
        this.querySelector('.lwc-gallary__main').style = 'display:none;'
    }

    renderedCallback() {
        requestAnimationFrame(() => {
            this.querySelector('.lwc-gallary__main').style = 'display:flex;'
        })
    }
}
