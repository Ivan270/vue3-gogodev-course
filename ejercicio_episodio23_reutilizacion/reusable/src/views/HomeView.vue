<template>
	<MainLayout>
		<template #main>
			<h3>Main content</h3>
		</template>
		<template #aux>
			<h3>Aux content</h3>
			<h4>X position: {{ x }}</h4>
			<h4>Y position: {{ y }}</h4>
		</template>
	</MainLayout>
</template>

<script lang="ts" setup>
	import MainLayout from '@/layouts/MainLayout.vue';
	import useMouse from '../composables/useMouse';

	const { x, y } = useMouse();
	console.log(x);
	console.log(y);
</script>
