<template>
	<RouterView></RouterView>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';
	import { RouterView } from 'vue-router';

	let note: Ref<string> = ref('');
	const sendToServer = async () => {
		const rawResponse = await fetch('https://xxxx', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Bearer myjwtquevoyaproveer',
			},
			body: JSON.stringify({
				note: note.value,
			}),
		});
		const response = await rawResponse.json();
	};
</script>

<style scoped></style>
