export const debounce = (fn, ms) => {
	let timer

	return function () {
		const innerFunc = () => fn.apply(this, arguments)
		clearTimeout(timer)
		timer = setTimeout(innerFunc, ms)
	}
}
