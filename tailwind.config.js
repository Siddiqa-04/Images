/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {},
	},
	theme: {
  extend: {
    colors: {
      'primary': '#FDE68A', // soft yellow
      'secondary': '#A78BFA', // soft purple
    },
  },
},

	plugins: [],
  }