export const slideUpSignUp = {
	initial: {
		y: 100,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
			damping: 12,
			ease: [0.32, 0, 0.67, 0]
		}
	},
	exit: {
		y: 100,
		opacity: 0,
		transition: {
			duration: 0.3
		}
	}
}
export const slideUpLogin = {
	initial: {
		y: 100,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
			damping: 12,
			ease: [0.32, 0, 0.67, 0]
		}
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 0.3
		}
	}
}