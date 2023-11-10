<template>
	<h1 class="display-5">Listado de posts</h1>
	<ul class="post-list">
		<li v-for="post in posts" :key="post.id">
			<router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{
				post.title
			}}</router-link>
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { Ref, onMounted } from 'vue';
	import PostService from '@/services/PostService';
	import PostInterface from '@/interfaces/Post.interface';

	const service = new PostService();
	const posts: Ref<Array<PostInterface>> = service.getPosts();

	onMounted(async () => await service.fetchAll());
</script>

<style scoped lang="scss">
	.post-list {
		text-align: center;
		width: 95vw;
		height: 75px;
		padding: 20px;
		list-style: none;

		li {
			padding: 10px;
			margin: auto;
			width: 50%;
			border: 1px solid #ccc;
			color: $primaryColor;
			// transition: background-color 0.3s;

			a {
				text-decoration: none;
				color: #666;
				cursor: pointer;
				transition: color 1s;
			}
			a:hover {
				color: $primaryColor;
			}
		}
	}
</style>
