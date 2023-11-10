import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import PostDetailView from '../views/PostDetailView.vue';
import PostListView from '@/views/PostListView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: (to) => {
			return { name: 'PostListView' };
		},
	},
	{
		path: '/post',
		name: 'PostListView',
		component: PostListView,
	},
	{
		path: '/post/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
