import './projects.scss'
import { createElement } from 'lwc'
import Projects from 'c/projects'
const projects = createElement(`c-projects`, { is: Projects })
projects.projects = window.projects
document.querySelector('.projects__container').appendChild(projects)
