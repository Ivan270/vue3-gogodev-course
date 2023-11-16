<template>
	<!-- <h3>{{ obj.count }}</h3>
	<button @click="obj.count++">Increment</button>
	<button @click="obj.count = 0">Reset</button> -->

	<h3>{{ $count() }}</h3>
	<button @click="$saySomething()">Decir algo</button>
</template>

<script lang="ts" setup>
	// import { reactive } from 'vue';

	// interface CountInterface {
	// 	count: number;
	// }

	// const obj: CountInterface = reactive({
	// 	count: 0,
	// });
</script>

<style></style>
