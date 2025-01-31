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
				muted: "#6b7280"
			}
		},
		dropShadow: {
			glow: [
				"0 0px 1px rgba(255,255, 255, 0.25)",
				"0 0px 20px rgba(255, 255,255, 0.3)"
			]
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#3673fd",
					"primary-content": "#fff",
					"secondary": "#fff",
					"secondary-content": "#0d0c22",
					"base-100": "#0d0c22",
					"error": "#b91c1c",
					"error-content": "#fff",
				},
			},
		],
	},
	plugins: [
		require('daisyui')
	],
};
export default config;
