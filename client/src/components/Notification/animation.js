export const NotifyAppear = {
	initial: {
		x: "-100%",
		opacity: 0
	},
	open: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
	},
	close: {
		x: "-100%",
		opacity: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
	}
}