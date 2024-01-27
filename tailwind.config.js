/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '370px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        // fontSize: {
        //     '4xl': '2.25rem',
        //     '3xl': '1.875rem',
        //     '2xl': '1.5rem',
        //     'xl': '1.25rem',
        // },


        colors: {
            'background': '#EFEFEF',
            'border': "#717982",
            'black': '#212932',
            'white': '#ffffff',
            'primary': '#F8BD37',
            'blue': '#1fb6ff',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
        container: {
            padding: {
                lg: '1rem',
                sm: '0.2rem',
                // DEFAULT: '1rem',
            }
        },
        extend: {
            animation: {
                typing: 'typing 5s steps(20), blink 1s infinite',
                fade: 'fadeIn 1.5s ease-in-out',
            },
            keyframes: {
                typing: {
                    from: {
                        width: '0'
                    },
                    to: {
                        width: '20ch'
                    },
                },
                blink: {
                    from: {
                        'border-right-color': 'transparent'
                    },
                    to: {
                        'border-right-color': 'black'
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '100'
                    },
                },
            },
        },
        fontFamily: {
            'body': ['"Roboto Mono"'],
        },
    },
    plugins: [],
}

