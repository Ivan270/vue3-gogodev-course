<template>
	<h1>Post num. {{ postId }}</h1>
</template>

<script lang="ts" setup>
	import { onMounted, ref, Ref } from 'vue';
	import { RouteLocationNormalizedLoaded } from 'vue-router';
	import { useRoute } from 'vue-router';

	let postId: Ref<string> = ref('');

	onMounted(() => {
		const route: RouteLocationNormalizedLoaded = useRoute();
		// let { id } = route.params;
		let id: string = route.params.id as string;
		// console.log(id);
		postId.value = id;
	});
</script>
