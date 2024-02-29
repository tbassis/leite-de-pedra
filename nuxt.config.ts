// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: [
		// SCSS file in the project
		"~/assets/style/main.scss",
	],
	modules: ["nuxt-icon"],
});
