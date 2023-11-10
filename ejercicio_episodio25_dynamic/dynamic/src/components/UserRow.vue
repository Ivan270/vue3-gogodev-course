<template>
	<tr>
		<td>{{ props.data.name }}</td>
		<td>{{ props.data.age }}</td>
		<td>{{ props.data.position }}</td>
	</tr>
</template>

<script lang="ts" setup>
	import { defineProps } from 'vue';
	const props = defineProps(['data']);
</script>

<style scoped>
	tr,
	td {
		border: 2px solid #dddddd;
	}
	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>
