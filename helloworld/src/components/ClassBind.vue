<template>
	<p :class="{ danger: hasError }">
		El mensaje se ha enviado satisfactoriamente
	</p>
	<p
		:style="{
			backgroundColor: 'gray',
			color: c,
		}"
	>
		El segundo mensaje se ha enviado satisfactoriamente
	</p>
	<button @click="changeColorHandler">Cambiar color del párrafo</button>
</template>

<script lang="ts" setup>
	import { Ref, ref } from 'vue';

	let hasError = true;
	let c: Ref<string> = ref('#fff');

	let changeColorHandler = (): void => {
		c.value === '#fff' ? (c.value = 'aquamarine') : (c.value = '#fff');
	};
</script>

<style scoped>
	.danger {
		color: white;
		background-color: salmon;
	}
</style>
