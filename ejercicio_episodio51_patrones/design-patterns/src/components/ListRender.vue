<template>
	<h3 class="text-slate-200" v-once>Person:</h3>
	<li
		:style="{
			color: props.color,
		}"
	>
		{{ props.data.id }} - {{ props.data.name }}
	</li>
</template>

<script lang="ts" setup>
	const props = defineProps(['data', 'color']);
</script>

<style scoped></style>
