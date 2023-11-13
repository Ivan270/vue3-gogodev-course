<template>
	<h3>{{ store.count }}</h3>
	<button @click="store.increment()">Añadir</button>

	<hr />

	<h3>Notas:</h3>
	<input type="text" v-model="note" />
</template>

<script lang="ts" setup>
	import { ref, Ref, watch, watchEffect } from 'vue';
	import { useExample } from '@/store/useExample';

	const store = useExample();
	store.init();

	const note: Ref<string> = ref('');

	// Se ejecutará cada vez que el valor de note se modifique
	// watch(note, (newVal, oldVal) => {
	// 	alert(
	// 		`Watcher ejecutado.\nNuevo valor: ${newVal}\nValor antiguo: ${oldVal}`
	// 	);
	// 	localStorage.setItem('note', newVal);
	// });

	watchEffect(() => {
		alert('Se ha modificado el valor: ' + note.value);
	});
</script>
