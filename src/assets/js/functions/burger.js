export const burgerMenu = () => {
	const headerBurger = document.querySelector('.header__burger')
	const headerNavBurger = document.querySelector('.header__navigation-burger')
	const headerNavigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const body = document.querySelector('body')

	headerBurger.addEventListener('click', () => {
		headerNavigation.classList.toggle('opened')
		overlay.classList.toggle('active')
		body.classList.toggle('disable-scroll')
	})

	headerNavBurger.addEventListener('click', () => {
		overlay.classList.remove('active')
		headerNavigation.classList.remove('opened')
		body.classList.remove('disable-scroll')
	})

	overlay.addEventListener('click', () => {
		if (headerNavigation.classList.contains('opened')) {
			headerNavigation.classList.remove('opened')
			overlay.classList.remove('active')
			body.classList.remove('disable-scroll')
		}
	})

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
		}
	})
}
