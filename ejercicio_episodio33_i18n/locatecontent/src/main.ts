import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import { messages } from './lang/messages';

const i18n = createI18n({
	// Options
	locale: 'en', //idioma por defecto
	fallbackLocale: 'en', // en caso que contenido no tenga idioma pedido
	messages, // conjunto de mensajes
});

const app = createApp(App);

app.use(i18n).mount('#app');
