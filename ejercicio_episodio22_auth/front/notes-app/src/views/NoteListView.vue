<template>
	<RouterLink :to="{ name: 'create' }">Crear nota</RouterLink>
	<button class="btn btn-secondary" @click="logout">Logout</button>
	<div class="container" v-if="notes.length > 0">
		<h1 class="display-6">Note list</h1>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Note</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="note in notes" :key="note.id">
					<th scope="row">{{ note.id }}</th>
					<td>{{ note.content }}</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="container" v-else>
		<h2 class="display-6">No hay notas para este usuario</h2>
	</div>
</template>

<script lang="ts" setup>
	import useAuth from '@/store/auth';
	import NoteInterface from '../interfaces/INote';

	import { ref, Ref, onMounted } from 'vue';
	import router from '@/router';

	const store = useAuth();

	const notes: Ref<Array<NoteInterface>> = ref([]);

	onMounted(async () => {
		notes.value = await store.getNotes();
	});
	const logout = () => {
		store.logout();
		router.push({ name: 'login' });
	};
</script>

<style scoped></style>
