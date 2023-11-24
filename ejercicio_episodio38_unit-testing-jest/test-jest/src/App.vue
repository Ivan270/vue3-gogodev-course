<template>
	<h1>Counter</h1>
	<h2>{{ count }}</h2>
	<button @click="increment()">Increment</button>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';

	const count: Ref<number> = ref(0);

	const increment = (): number => count.value++;
</script>

<style scoped></style>
