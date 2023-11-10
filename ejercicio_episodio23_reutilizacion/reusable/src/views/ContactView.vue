<template>
	<MainLayout>
		<template #main>
			<h3>Contact section</h3>
		</template>
		<template #aux>
			<h4>X Position: {{ x }}</h4>
			<h4>y Position: {{ y }}</h4>
		</template>
	</MainLayout>
</template>

<script lang="ts" setup>
	import MainLayout from '@/layouts/MainLayout.vue';
	import useMouse from '@/composables/useMouse';

	const { x, y } = useMouse();
</script>

<style scoped></style>
