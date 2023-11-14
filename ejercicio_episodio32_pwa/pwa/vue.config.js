const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	// configuración para pwa
	// Son las mismas opciones que en manifest.json, cambia snake case por camel
	pwa: {
		name: 'PWA Example',
		shortName: 'PWA',
		themeColor: '#33ff44',
		backgroundColor: '#ccc',
	},
});
