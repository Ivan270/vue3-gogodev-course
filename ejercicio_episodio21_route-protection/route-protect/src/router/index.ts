import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
		meta: {
			requireAuth: false,
		},
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView,
		meta: {
			requireAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	// comprobar si usuario se autenticó. Se puede validar con token
	const auth = false;
	// evaluar si ruta a la que se quiere ir necesita auth
	const needAuth = to.meta.requireAuth;
	// si es que quiere ir a ruta con auth y no está autenticado
	if (needAuth && !auth) {
		next('login');
	} else {
		// next vacío para la ruta a la que usuario quiere ir
		next();
	}
});

export default router;
