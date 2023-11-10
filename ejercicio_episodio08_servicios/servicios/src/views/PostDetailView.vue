<template>
	<div class="post-container">
		<div class="post-card">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>

		<button>
			<router-link :to="{ name: 'PostListView' }">Volver atrás</router-link>
		</button>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted } from 'vue';
	import { useRoute } from 'vue-router';

	import PostService from '@/services/PostService';

	let service = new PostService();
	const post = service.getPost();

	onMounted(async () => {
		let id = useRoute().params.id;
		await service.fetchPostById(id);
	});
</script>

<style scoped lang="scss">
	.post-container {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-content: center;
	}
	.post-card {
		padding: 25px;
		width: 750px;
		border-radius: 15px;
		border: 1px solid #ccc;
	}
	button {
		margin-top: 50px;
		background-color: $primaryColor;
		padding: 6px;
		border-radius: 5px;
		border: 0px;
		transition: background-color 0.3s;
		a {
			text-decoration: none;
			color: white;
			transition: letter-spacing 1s;
		}
	}
	button:hover {
		background-color: darken($color: #000000, $amount: 0);
		a {
			letter-spacing: 10px;
			text-decoration: underline;
		}
	}
</style>
