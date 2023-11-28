import './projects-mobile.scss'
import { createElement } from 'lwc'
import Projects from 'm/projects'
const projects = createElement(`m-projects`, { is: Projects })
projects.projects = window.projects
document.querySelector('.projects-mobile__container').appendChild(projects)
