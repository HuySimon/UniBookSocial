/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f5fc',
                    100: '#b0e1f5',
                    200: '#8ad2f1',
                    300: '#54beea',
                    400: '#33b1e6',
                    500: '#009ee0',
                    600: '#0090cc',
                    700: '#00709f',
                    800: '#00577b',
                    900: '#00425e',
                    main: '#105582',
                },
                button: '#76c5f2',
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [],
};
