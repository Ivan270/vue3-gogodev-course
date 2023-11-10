<template>
	<div class="card">
		<h3>{{ props.data.name }}</h3>
		<p>Edad: {{ props.data.age }}</p>
		<p>Puesto: {{ props.data.position }}</p>
	</div>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';

	const props = defineProps(['data']);
</script>

<style scoped>
	.card {
		background-color: rgb(82, 82, 82);
		color: white;
		border: 2px solid gray;
		border-radius: 12px;
		padding: 10px;
		margin: 32px 10px;
		width: 350px;
	}
</style>
