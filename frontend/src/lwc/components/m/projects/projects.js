import './projects.scss'
import { LightningElement, api } from 'lwc'

export default class Projects extends LightningElement {
    static renderMode = 'light'
    index = 0
    style
    @api projects

    get current() {
        return this.projects[this.index]
    }

    get currentIndex() {
        return this.index + 1
    }

    get projectsLength() {
        return this.projects.length
    }

    handleNext() {
        if (this.index < this.projectsLength - 1) {
            this.index++
            this.querySelector('.lwc-projects').style = 'display:none;'
        }
    }

    handlePrev() {
        if (this.index > 0) {
            this.index--
            this.querySelector('.lwc-projects').style = 'display:none;'
        }
    }

    renderedCallback() {
        requestAnimationFrame(() => {
            this.querySelector('.lwc-projects').style = 'display:flex;'
        })
    }
}
