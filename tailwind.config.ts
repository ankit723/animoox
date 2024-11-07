import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	extend: {
  		colors: {
  			brand: '#091DF6FB',
  			secondary: '#BFCCDC',
  			'search-bar': '#F3FBFF',
  			D: '#0F0726',
  			E: '#575268',
  			border: '#575268',
  			white: '#FFFFFF',
  			bg: '#f2f2f3',
  			'secondary-text': '#828282',
  			'ternary-text': '#CFCFCF',
  			error: '#ef4444'
  		},
  		borderRadius: {
  			'2.5xl': '20px',
  			'4.5xl': '30px',
  			'9xl': '30px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config