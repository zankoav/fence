import './pricing.scss'
import { createElement } from 'lwc'
import Pricing from 'c/pricing'
const pricing = createElement(`c-pricing`, { is: Pricing })
document.querySelector('.pricing__container').appendChild(pricing)
