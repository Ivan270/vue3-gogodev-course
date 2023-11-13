<template>
	<h1>Porcentaje completado: {{ percentage }}%</h1>
</template>

<script lang="ts" setup>
	import { onMounted, ref, Ref, defineExpose } from 'vue';

	const percentage: Ref<number> = ref(0);

	onMounted(() => {
		percentage.value = 24;
	});

	// Será necesario exponer este método para que el componente padre pueda acceder
	const recalculate = () => {
		percentage.value = 42;
	};
	defineExpose({ recalculate });
</script>

<style scoped></style>
