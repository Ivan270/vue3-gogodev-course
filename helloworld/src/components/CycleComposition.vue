<template>
	<div><h1>Cycle Composition</h1></div>
</template>

<script lang="ts" setup>
	import { onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue';
	onBeforeMount(() => console.log('before mount composition'));
	onMounted(() => console.log('mounted composition'));
	onUpdated(() => console.log('on updated'));
</script>

<style scoped></style>
