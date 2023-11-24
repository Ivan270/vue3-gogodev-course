import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

console.log(path.resolve(__dirname));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		'@': path.resolve(__dirname, './src'),
	},
	define: {
		'process.env': process.env,
	},
});
