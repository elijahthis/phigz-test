/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"pry-col": "var(--pry-col)",
				"sec-col": "var(--sec-col)",
				"main-dark": "var(--main-dark)",
				"sec-dark": "var(--sec-dark)",
			},
		},
	},
	plugins: [],
};
