<template>
	<h1>{{ counterStore.count }}</h1>
	<h2>Double: {{ counterStore.times2 }}</h2>
	<button @click="counterStore.increment(1)">Increment</button>
</template>

<script lang="ts" setup>
	import { useCounterStore } from './store/counter';
	const counterStore = useCounterStore();
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
