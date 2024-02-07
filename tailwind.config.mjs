/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'hero-pattern': "url('../../assets/images/hero_background.jpg')",
      },
			fontSize: {
        '6xl': '1.5rem',
        '7xl': '1.875rem',
        '8xl': '2.25rem',
        '9xl': '3rem',
        '10xl': '4rem',
      },
		},
	},
	plugins: [],
}
