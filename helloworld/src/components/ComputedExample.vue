<template>
	<div>
		<input type="text" placeholder="Algún texto" v-model="message" />
		<h2>Mensaje original</h2>
		<h3>{{ message }}</h3>
		<h2>Mensaje al revés</h2>
		<h3>{{ reverse }}</h3>
	</div>
</template>

<script lang="ts" setup>
	import { Ref, ref, computed } from 'vue';

	let message: Ref<string> = ref('');
	const reverse: Ref<string> = computed(() =>
		message.value.split('').reverse().join('')
	);
</script>

<style scoped></style>
