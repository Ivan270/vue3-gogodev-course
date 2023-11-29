import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabMenu from '@/components/TabMenu.vue';

const routes: Array<RouteRecordRaw> = [
	// {
	// path: '/',
	// redirect: '/home',
	// component: HomeView,
	// },
	{
		path: '/',
		component: TabMenu,
		children: [
			{
				path: '',
				redirect: '/home',
			},
			{
				path: '/home',
				component: () => import('../views/HomeView.vue'),
			},
			{
				path: '/library',
				component: () => import('../views/LibraryView.vue'),
			},
			{
				path: '/radio',
				component: () => import('../views/RadioView.vue'),
			},
			{
				path: '/search',
				component: () => import('../views/SearchView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
