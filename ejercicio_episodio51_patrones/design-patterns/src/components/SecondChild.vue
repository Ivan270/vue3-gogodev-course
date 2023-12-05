<template>
	<h1 class="text-slate-200 text-lg font-semibold">Second Child component</h1>
	<p>{{ msg }}</p>
</template>

<script lang="ts" setup>
	import { inject } from 'vue';

	const msg = inject('msg');
</script>

<style scoped></style>
