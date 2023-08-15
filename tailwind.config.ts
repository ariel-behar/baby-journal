import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: '#0d0c22',
				darkSoft: '#2d2b42',
				light: 'white',
				lightSoft: '#e5e5e5',
				customBlue: '#3673fd'
			},
		},
	},
	plugins: [],
};
export default config;
