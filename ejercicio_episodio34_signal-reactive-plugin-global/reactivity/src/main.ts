import { createApp } from 'vue';
import example from '@/plugins/example';
import App from './App.vue';

const app = createApp(App);

app
	.use(example, {
		message: 'Sup!',
	})
	.mount('#app');
