<template>
	<h1>Home page</h1>
	<div>
		<ul>
			<li v-for="(item, index) in notes" :key="index">
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
	import NoteService from '@/services/NoteService';
	import { ref, onMounted } from 'vue';
	import type INote from '@/interfaces/INote';

	const notes: Ref<Array<INote>> = ref([]);

	const noteService = new NoteService();

	onMounted(async () => {
		const apiNotes = await noteService.getNote();
		notes.value = apiNotes.notes;
	});
</script>

<style scoped></style>
