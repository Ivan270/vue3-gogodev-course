// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	nitro: {
		plugins: ['~/server/index.ts'],
	},
	runtimeConfig: {
		mongodbUri: process.env.MONGODB_URI,
	},
	// ssr: true,
	// nitro: {
	// 	prerender: {
	// 		// rutas a pre renderizar, para que se suban de forma estática
	// 		routes: ['/services', '/contact', '/about', '/', '/projects'],
	// 	},
	// },
	// routeRules: {
	// 	'/': {
	// 		prerender: true,
	// 	},
	// 	'/about': {
	// 		ssr: true, // SSR puro
	// 	},
	// 	'/services': {
	// 		ssr: false, // Static page
	// 	},
	// },
});
