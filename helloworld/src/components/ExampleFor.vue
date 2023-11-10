<template>
	<ul>
		<li v-for="(country, index) in countries" :key="index">
			Código:{{ country.code }} - País:{{ country.name }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
	import { Ref, ref } from 'vue';
	interface CountryCodeInterface {
		code: string;
		name: string;
	}

	let countries: Ref<Array<CountryCodeInterface>> = ref([
		{
			code: 'es',
			name: 'Spain',
		},
		{
			code: 'en',
			name: 'UK',
		},
		{
			code: 'fr',
			name: 'France',
		},
		{
			code: 'it',
			name: 'Italy',
		},
	]);
</script>

<style scoped></style>
