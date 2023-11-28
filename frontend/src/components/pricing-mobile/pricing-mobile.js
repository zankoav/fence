import './pricing-mobile.scss'
import { createElement } from 'lwc'
import Pricing from 'm/pricing'
const pricing = createElement(`m-pricing`, { is: Pricing })
document.querySelector('.pricing__container').appendChild(pricing)
