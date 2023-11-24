<template>
	<h1>Counter App</h1>
	<h2 id="counter-info">{{ count }}</h2>
	<button @click="count++">Increment</button>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';

	const count: Ref<number> = ref(0);
</script>
