/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e8e8f3',
					200: '#d1d2e7',
					300: '#babbdb',
					400: '#a3a5cf',
					500: '#8c8ec4',
					600: '#7577b8',
					700: '#5e61ac',
					800: '#474aa0',
					900: '#303494',
					main: '#191D88'
				},
				button: "#76c5f2"
			}
		},
	},
	plugins: [],
}