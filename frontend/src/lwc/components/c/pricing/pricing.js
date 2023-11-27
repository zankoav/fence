import './pricing.scss'
import { LightningElement } from 'lwc'

export default class Pricing extends LightningElement {
    static renderMode = 'light'
    loading
    finish

    distance = ''
    meshThickness
    pillarsHeight
    fenceHeight

    get mainView() {
        return !this.loading && !this.finish
    }

    get fenceData() {
        return {
            distance: this.distance,
            meshThickness: this.meshThickness,
            pillarsHeight: this.pillarsHeight,
            fenceHeight: this.fenceHeight,
            price: this.price
        }
    }

    get price() {
        let result = '-'
        if (this.meshThickness && this.pillarsHeight && this.fenceHeight && this.distance) {
            result = `${this.fenceHeight} ${this.meshThickness} ${this.pillarsHeight} ${this.distance}`
        }
        return result
    }

    get fenceHeightModel() {
        return {
            label: 'Высота забора, м:',
            name: 'fenceHeight',
            items: [
                {
                    label: '1,2',
                    value: '1,2',
                    selected: this.fenceHeight == '1,2'
                },
                {
                    label: '1,5',
                    value: '1,5',
                    selected: this.fenceHeight == '1,5'
                }
            ]
        }
    }

    get meshThicknessModel() {
        return {
            label: 'Толщина сетки, мм:',
            name: 'meshThickness',
            items: [
                {
                    label: '0,40',
                    value: '0,40',
                    selected: this.meshThickness == '0,40'
                },
                {
                    label: '0,45',
                    value: '0,45',
                    selected: this.meshThickness == '0,45'
                }
            ]
        }
    }

    get pillarsHeightModel() {
        return {
            label: 'Вид столбиков:',
            name: 'pillarsHeight',
            items: [
                {
                    label: '40*40*1.5',
                    value: '40*40*1.5',
                    selected: this.pillarsHeight == '40*40*1.5'
                },
                {
                    label: '40*40*2',
                    value: '40*40*2',
                    selected: this.pillarsHeight == '40*40*2'
                }
            ]
        }
    }

    get inputClasses() {
        return this.distance
            ? 'lwc-pricing__calculator-length-input lwc-pricing__calculator-length-input_valid'
            : 'lwc-pricing__calculator-length-input'
    }

    connectedCallback() {
        this.meshThickness = this.meshThicknessModel.items[0].value
        this.pillarsHeight = this.pillarsHeightModel.items[0].value
        this.fenceHeight = this.fenceHeightModel.items[0].value
    }

    handleChangeDistance(event) {
        const value = parseInt(event.target.value)
        this.distance = isNaN(value) ? '' : value
        event.target.value = this.distance
    }

    handleGroupChange(event) {
        this[event.detail.name] = event.detail.value
    }

    async handleSubmit(event) {
        const data = event.detail
        console.log(data)
        this.loading = true
        setTimeout(() => {
            this.loading = false
            this.finish = true
        }, 5000)
    }
}
