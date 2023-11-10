import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { globalCookiesConfig } from 'vue3-cookies';
import Vue3Storage from 'vue3-storage';

// ###### Firebase Auth START ######
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAWN4oAA7is3eLn6sRptG_999w08-fExTM',
	authDomain: 'vue-gogodev.firebaseapp.com',
	projectId: 'vue-gogodev',
	storageBucket: 'vue-gogodev.appspot.com',
	messagingSenderId: '884316446650',
	appId: '1:884316446650:web:9a40b620da50b1181b0783',
	measurementId: 'G-M5FLX3T0SH',
};

initializeApp(firebaseConfig);
// ###### Firebase Auth END ######

globalCookiesConfig({
	expireTimes: '1d',
	path: '/',
	domain: '',
	secure: true,
	sameSite: 'None',
});

const app = createApp(App);

app.use(router).use(Vue3Storage, { namespace: 'pro_' }).mount('#app');
