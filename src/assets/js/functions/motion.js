import {animate, stagger} from 'motion'

export const animateTitle = () => {
	const heroTitle = document.querySelector('[data-hero-title]')

	let letters = heroTitle.innerText.replace(/\s+/g, ' ').trim().split('')
	const lettersLength = letters.length
	heroTitle.innerText = ''
	for (let i = 0; i < lettersLength; i++) {
		const span = document.createElement('span')
		span.textContent = letters[i]
		heroTitle.appendChild(span)
	}

	animate(
		'[data-hero-title] span',
		{opacity: [0, 1], y: [-20, 0], x: [-10, 0]},
		{duration: 0.3, delay: stagger(0.1)}
	)
}
