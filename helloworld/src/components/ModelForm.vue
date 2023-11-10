<template>
	<form>
		<input type="text" v-model="inputText" />
		<input type="checkbox" v-model="termsAgreement" /> Acepto los términos y
		condiciones.
		<select v-model="countrySelection">
			<option disabled>Select one option</option>
			<option value="Spain">Spain</option>
			<option value="UK">UK</option>
			<option value="France">France</option>
		</select>
	</form>
	<h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';
	let inputText: Ref<string> = ref('');
	let termsAgreement: Ref<boolean> = ref(false);
	let countrySelection: Ref<string> = ref('');
</script>

<style scoped>
	form {
		margin-top: 25px;
	}
</style>
