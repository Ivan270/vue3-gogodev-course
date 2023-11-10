<template>
	<div>
		<label v-custom-size-2:xl>Subtotal</label>
		<input type="number" v-model="subtotal" />
		<h3 v-font-size>Total impuestos a pagar: {{ impuesto }} ({{ vat }}%)</h3>
		<h2 v-custom-size="100">Total a pagar: ${{ total }}</h2>
		<h2 v-custom-font.xxl.blue>Pague sus cuentas</h2>
	</div>
</template>

<script lang="ts" setup>
	import { computed, Ref, ref } from 'vue';

	const vat = 21;
	let subtotal: Ref<number> = ref(0);
	const impuesto = computed(() => (subtotal.value * vat) / 100);
	const total = computed(() => subtotal.value + impuesto.value);
</script>

<style scoped></style>
