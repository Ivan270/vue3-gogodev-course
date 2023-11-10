<template>
	<h1 v-if="age < 18">Eres menor de edad</h1>
	<h1 v-else>Eres mayor de edad</h1>
	<!-- v-show renderiza los nodos dentro del DOM pero aplica la clase display-none -->
	<!-- <h1 v-show="age < 18">Eres menor de edad</h1>
	<h1 v-show="age >= 18">Eres mayor de edad</h1> -->
</template>

<script lang="ts" setup>
	let age = 10;
</script>

<style scoped></style>
