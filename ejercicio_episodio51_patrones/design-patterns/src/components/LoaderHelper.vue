<template>
	<div class="container mx-auto my-5 p-10 text-white text-center" v-if="!data">
		<h1 class="font-bold text-2xl">Loading . . .</h1>
	</div>
	<!-- o un loader animado -->
	<component v-else :is="props.componentToShow" :data="data" />
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue';

	const props = defineProps(['url', 'componentToShow']);

	const data = ref();

	onMounted(async () => {
		const request = await fetch(props.url);
		data.value = await request.json();
	});
</script>

<style scoped></style>
