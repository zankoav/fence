import './form.scss'
import { LightningElement, api } from 'lwc'

export default class Form extends LightningElement {
    static renderMode = 'light'
    formData = {
        fio: null,
        phone: null,
        info: null
    }

    @api fenceData

    handleFieldChange(event) {
        if (event.detail) {
            this.formData[event.detail.name] = event.detail.value
        }
    }

    handleSubmit() {
        const orderData = {
            formData: this.formData,
            fenceData: this.fenceData
        }
        if (orderData.formData.fio && orderData.formData.phone) {
            this.dispatchEvent(
                new CustomEvent('sendform', {
                    detail: orderData
                })
            )
        } else if (!orderData.formData.fio || !orderData.formData.phone) {
            this.formData = {
                fio: this.formData.fio || '',
                phone: this.formData.phone || '',
                info: this.formData.info || ''
            }
        }
    }
}
