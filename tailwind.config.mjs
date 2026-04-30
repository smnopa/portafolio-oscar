/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				parchment: '#F0EAE0',
				accent: '#1A3A6E',
				ink: '#1C1C1C',
				gold: '#B8934A',
			},
			fontFamily: {
				display: ['Playfair Display', 'Georgia', 'serif'],
				body: ['Abhaya Libre', 'Georgia', 'serif'],
			},
		},
	},
	plugins: [],
}
