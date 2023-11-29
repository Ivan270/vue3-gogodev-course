<template>
	<NuxtLayout>
		<h1>Project Number: {{ projectId }}</h1>
	</NuxtLayout>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	definePageMeta({
		layout: 'projects',
	});
	const route = useRoute();
	const projectId = ref();
	projectId.value = route.params.id;
</script>

<style scoped></style>
