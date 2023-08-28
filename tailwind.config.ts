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
				primary: {
					DEFAULT: "#3673fd",
					content: "#fff"
				},
				secondary: {
					DEFAULT: "#fff",
					content: "#0d0c22"
				},
				light: '#fff',
				dark: {
					DEFAULT: "#0d0c22",
					soft: "#2d2b42"
				},
			}
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#3673fd",
					"primary-content": "#fff",
					"secondary": "#fff",
					"secondary-content": "#0d0c22",
					"base-100": "#0d0c22"
				},
			},
		],
	},
	plugins: [
		require('daisyui')
	],
};
export default config;
