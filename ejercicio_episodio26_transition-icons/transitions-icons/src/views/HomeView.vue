<template>
	<TransitionGroup name="list" tag="ul">
		<li v-for="(note, index) in notes" :key="index">
			<v-icon name="bi-file-code-fill" animation="wrench" hover="true" />
			{{ note }}
		</li>
	</TransitionGroup>
	<input type="text" v-model="note" />
	<button @click="addNote">Save note</button>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';

	const notes: Ref<Array<string>> = ref([]);
	const note: Ref<string> = ref('');

	const addNote = () => {
		notes.value.push(note.value);
		note.value = '';
	};
</script>

<style>
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	.list-enter-to,
	.list-leave-from {
		opacity: 1;
	}
	.list-enter-active,
	.list-leave-active {
		transition: all 1s ease;
	}
	ul {
		text-align: start;
	}
</style>
