<template>
	<div>
		<h2>Counter Composition</h2>
		<h3>{{ counter }}</h3>
		<button @click="addCounter">Incrementar</button>
	</div>
</template>

<script lang="ts" setup>
	import { Ref, ref } from 'vue';
	// components: {},
	// Aquí se utilizan los hooks importados, etc
	let counter: Ref = ref(0);
	const addCounter = (): void => {
		counter.value++;
	};
</script>

<style scoped>
	div {
		display: grid;
	}
	h2,
	h3 {
		text-align: center;
	}
</style>
