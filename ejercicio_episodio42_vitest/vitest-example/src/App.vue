<template>
	<h1>{{ counter }}</h1>
	<button @click="increase">Increase</button>
</template>

<script setup>
	import { ref } from 'vue';

	const counter = ref(0);
	const increase = () => counter.value++;
</script>

<style scoped></style>
