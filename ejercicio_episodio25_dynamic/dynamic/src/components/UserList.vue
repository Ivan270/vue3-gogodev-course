<template>
	<li>
		Nombre: {{ props.data.name }} | Edad: {{ props.data.age }} | Puesto:
		{{ props.data.position }}
	</li>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';
	const props = defineProps(['data']);
</script>

<style scoped>
	li {
		text-align: start;
		margin: 8px 0px;
	}
</style>
