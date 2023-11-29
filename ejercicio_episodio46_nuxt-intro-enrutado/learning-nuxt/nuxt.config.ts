// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// ssr: true,
	// nitro: {
	// 	prerender: {
	// 		// rutas a pre renderizar, para que se suban de forma estática
	// 		routes: ['/services', '/contact', '/about', '/', '/projects'],
	// 	},
	// },
	routeRules: {
		'/': {
			prerender: true,
		},
		'/about': {
			ssr: true, // SSR puro
		},
		'/services': {
			ssr: false, // Static page
		},
	},
});
