import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiFileCodeFill } from 'oh-vue-icons/icons';

addIcons(BiFileCodeFill);

createApp(App).component('v-icon', OhVueIcon).use(router).mount('#app');
