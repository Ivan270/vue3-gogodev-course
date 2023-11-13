<template>
	<!-- Ejemplo Control delegado por referencia -->
	<ChildComponent ref="percentageComponent"></ChildComponent>
	<button @click="banco">Añadir Cuenta Bancaria</button>

	<!-- Ejemplo v-lazy, recibe objeto con opciones -->
	<img
		v-lazy="{
			src: lazyOptions.src,
			lifecycle: lazyOptions.lyfecycle,
			delay: lazyOptions.delay,
		}"
		lazy="loading"
	/>
</template>

<script lang="ts" setup>
	// Ejemplo control delegado por referencia
	import { ref, VNode } from 'vue';
	import ChildComponent from './ChildComponent.vue';

	const percentageComponent = ref();

	const banco = () => {
		// alert('Cuenta subida al servidor');
		percentageComponent.value.recalculate();
	};

	// Ejemplo v-lazy
	const lazyOptions = ref({
		src: 'https://picsum.photos/1280/800',
		delay: 500,
		lyfecycle: {
			loading: (el: VNode) => {
				console.log('Cargando imagen', el);
			},
			error: (el: VNode) => {
				console.error('Error al cargar imagen', el);
			},
			loaded: (el: VNode) => {
				console.log('Imagen cargada', el);
			},
		},
	});
</script>

<style scoped>
	img[lazy='loading'] {
		background-color: blue;
		width: 500px;
	}
	img[lazy='loaded'] {
		border-radius: 50%;
		width: 300px;
	}
	img[lazy='error'] {
		background-color: red;
	}
</style>
