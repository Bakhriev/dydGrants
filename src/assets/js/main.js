import {burgerMenu} from './functions/burger'
import {
	animateTitle,
	animateHeader,
	animateButtons,
	animateProjects,
	animateCircle,
} from './functions/motion'

burgerMenu()

animateTitle()
animateHeader()
animateButtons()

const projectsItems = document.querySelectorAll('.projects__item')
const heroArrow = document.querySelector('.hero__scroll-img')
animateCircle(projectsItems, 1, 0.7)
animateCircle(heroArrow, 0.7, 1)
